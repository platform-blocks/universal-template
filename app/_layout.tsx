import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useMemo, type ReactNode } from 'react';
import { Platform } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider as NavigationThemeProvider,
} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  PlocksProvider,
  useTheme,
  useThemeMode,
  type ThemeModeConfig,
} from '@plocks/ui';

const THEME_STORAGE_KEY = 'plocks-theme-mode';

/**
 * Lifts the `plocks-content-pending` class the pre-hydration script in
 * app/+html.tsx stamps on <html> for dark-theme readers. The class is only ever
 * added when the script resolved the scheme to dark, so this waits until the
 * provider has actually rendered the dark theme before revealing — dark-mode
 * visitors see dark content appear, never a light flash. The script's own
 * timer is the fallback if hydration fails entirely.
 */
function ContentReveal() {
  const { actualColorScheme } = useThemeMode();

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') {
      return;
    }
    const root = document.documentElement;
    if (!root.classList.contains('plocks-content-pending')) {
      return;
    }
    if (actualColorScheme !== 'dark') {
      return;
    }
    const reveal = () => {
      root.classList.remove('plocks-content-pending');
    };
    if (typeof requestAnimationFrame === 'function') {
      const frame = requestAnimationFrame(reveal);
      return () => {
        cancelAnimationFrame(frame);
        reveal();
      };
    }
    reveal();
  }, [actualColorScheme]);

  return null;
}

/**
 * Feeds the plocks theme into React Navigation so navigator-owned
 * surfaces (scene background, headers, the tab bar's defaults) follow the same
 * light/dark scheme as the components instead of Navigation's built-in themes.
 */
function NavigationThemeBridge({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const { actualColorScheme } = useThemeMode();

  const navigationTheme = useMemo(() => {
    const base = actualColorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return {
      ...base,
      colors: {
        ...base.colors,
        primary: theme.colors.primary[6] ?? base.colors.primary,
        background: theme.backgrounds.base,
        card: theme.backgrounds.surface,
        text: theme.text.primary,
        border: theme.backgrounds.border,
      },
    };
  }, [theme, actualColorScheme]);

  return <NavigationThemeProvider value={navigationTheme}>{children}</NavigationThemeProvider>;
}

export default function RootLayout() {
  // Persist the reader's light/dark/auto choice. On web this pairs with the
  // pre-hydration script in +html.tsx (same storage key, same class names) so
  // a saved "dark" applies before first paint.
  const themeModeConfig: ThemeModeConfig = useMemo(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      return {
        initialMode: 'auto',
        persistence: {
          get: () => {
            try {
              const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
              if (stored === 'light' || stored === 'dark' || stored === 'auto') return stored;
            } catch {
              return null;
            }
            return null;
          },
          set: mode => {
            try {
              window.localStorage.setItem(THEME_STORAGE_KEY, mode);
            } catch {
              /* noop */
            }
          },
        },
      };
    }
    return { initialMode: 'auto' };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PlocksProvider themeModeConfig={themeModeConfig}>
        <ContentReveal />
        <StatusBar style="auto" />
        <NavigationThemeBridge>
          <Stack screenOptions={{ headerShown: false }} />
        </NavigationThemeBridge>
      </PlocksProvider>
    </GestureHandlerRootView>
  );
}

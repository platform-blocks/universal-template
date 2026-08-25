import { IconButton, useThemeMode } from '@platform-blocks/ui';

const MODE_ICON = {
  light: 'sun',
  dark: 'moon',
  auto: 'contrast',
} as const;

/** Cycles light → dark → auto. The choice persists across visits/launches. */
export function ThemeToggle() {
  const { mode, cycleMode } = useThemeMode();

  return (
    <IconButton
      icon={MODE_ICON[mode]}
      variant="ghost"
      onPress={cycleMode}
      accessibilityLabel={`Theme: ${mode}. Tap to change.`}
    />
  );
}

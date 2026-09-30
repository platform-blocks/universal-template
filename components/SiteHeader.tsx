import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Flex, Text, useTheme } from '@plocks/ui';

import { ThemeToggle } from './ThemeToggle';

/** Website-style top navigation, shared by every page. */
export function SiteHeader() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Flex
      direction="row"
      ta="center"
      justify="space-between"
      px="lg"
      py="md"
      style={{
        paddingTop: insets.top + 12,
        backgroundColor: theme.backgrounds.surface,
        borderBottomWidth: 1,
        borderBottomColor: theme.backgrounds.border,
      }}
    >
      <Link href="/">
        <Text variant="h4" fw="bold">Universal</Text>
      </Link>
      <Flex direction="row" ta="center" gap="lg">
        <Link href="/">
          <Text fw="medium">Home</Text>
        </Link>
        <Link href="/about">
          <Text fw="medium">About</Text>
        </Link>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}

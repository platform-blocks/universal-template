import { Card, Column, Flex, Icon, Text, useTheme } from '@plocks/ui';

const FEATURES = [
  {
    icon: 'rocket',
    title: 'Native performance',
    description: 'Real native views on iOS and Android — no webviews, no compromises.',
  },
  {
    icon: 'globe',
    title: 'A real website too',
    description: 'The same routes render as a statically exported, SEO-ready website.',
  },
  {
    icon: 'palette',
    title: 'Themeable',
    description: 'Light, dark, and auto modes with a persisted toggle, out of the box.',
  },
  {
    icon: 'bolt',
    title: '100+ components',
    description: 'plocks ships everything from buttons to data tables and charts.',
  },
] as const;

/**
 * The landing page's feature cards. Laid out with wrapping flexbox rather than
 * the breakpoint-resolved Grid so the statically rendered HTML is already
 * responsive before any JavaScript runs.
 */
export function FeatureGrid() {
  const theme = useTheme();

  return (
    <Flex direction="row" wrap="wrap" gap="md">
      {FEATURES.map(feature => (
        <Card
          key={feature.title}
          variant="elevated"
          p="lg"
          style={{ flexBasis: 320, flexGrow: 1 }}
        >
          <Column gap="sm">
            <Flex direction="row" ta="center" gap="sm">
              <Icon name={feature.icon} size={24} color={theme.colors.primary[6]} />
              <Text variant="h4" fw="semibold">{feature.title}</Text>
            </Flex>
            <Text c="secondary">{feature.description}</Text>
          </Column>
        </Card>
      ))}
    </Flex>
  );
}

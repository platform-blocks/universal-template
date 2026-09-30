import Head from 'expo-router/head';
import { ScrollView } from 'react-native';
import { Card, Column, Text, Title } from '@plocks/ui';

import { SiteHeader } from '../components/SiteHeader';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — plocks Universal</title>
        <meta
          name="description"
          content="How this template ships native apps and a static website from one Expo Router codebase."
        />
      </Head>
      <SiteHeader />
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16, maxWidth: 720, width: '100%', alignSelf: 'center' }}>
        <Title order={1}>About this template</Title>
        <Text c="secondary">
          Every file in app/ is a route. On iOS and Android it navigates as a native stack;
          on the web, `npx expo export --platform web` prerenders each route to its own
          HTML file with the tags from expo-router/head — ready for any static host.
        </Text>
        <Card variant="outline" p="lg">
          <Column gap="sm">
            <Title order={3}>Flash-free dark mode</Title>
            <Text c="secondary">
              app/+html.tsx runs a small script before first paint that applies the visitor&apos;s
              saved theme (or OS preference), so dark-mode readers never see a light flash —
              the same pattern plocks.dev uses.
            </Text>
          </Column>
        </Card>
      </ScrollView>
    </>
  );
}

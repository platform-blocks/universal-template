import Head from 'expo-router/head';
import { Linking, ScrollView } from 'react-native';
import { Button, Column, Flex, Text, Title } from '@plocks/ui';

import { FeatureGrid } from '../components/FeatureGrid';
import { SiteHeader } from '../components/SiteHeader';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>plocks Universal</title>
        <meta
          name="description"
          content="One codebase shipping native iOS and Android apps and a statically rendered website, built with plocks."
        />
      </Head>
      <SiteHeader />
      <ScrollView contentContainerStyle={{ padding: 24, gap: 32, maxWidth: 960, width: '100%', alignSelf: 'center' }}>
        <Column gap="md" align="center" py="xl">
          <Title order={1} ta="center">One codebase. Every platform.</Title>
          <Text c="secondary" ta="center" style={{ maxWidth: 560 }}>
            This page is a native screen on iOS and Android, and a statically rendered,
            SEO-ready web page — from the same file. Edit app/index.tsx to make it yours.
          </Text>
          <Flex direction="row" gap="md" wrap="wrap" justify="center">
            <Button
              title="Get started"
              variant="filled"
              onPress={() => Linking.openURL('https://plocks.dev/getting-started')}
            />
            <Button
              title="Browse components"
              variant="outline"
              onPress={() => Linking.openURL('https://plocks.dev/components')}
            />
          </Flex>
        </Column>
        <FeatureGrid />
      </ScrollView>
    </>
  );
}

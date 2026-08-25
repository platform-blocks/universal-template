import Head from 'expo-router/head';
import { Linking, ScrollView } from 'react-native';
import { Button, Column, Flex, Text, Title } from '@platform-blocks/ui';

import { FeatureGrid } from '../components/FeatureGrid';
import { SiteHeader } from '../components/SiteHeader';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Platform Blocks Universal</title>
        <meta
          name="description"
          content="One codebase shipping native iOS and Android apps and a statically rendered website, built with Platform Blocks."
        />
      </Head>
      <SiteHeader />
      <ScrollView contentContainerStyle={{ padding: 24, gap: 32, maxWidth: 960, width: '100%', alignSelf: 'center' }}>
        <Column gap="md" align="center" py="xl">
          <Title order={1} align="center">One codebase. Every platform.</Title>
          <Text colorVariant="secondary" align="center" style={{ maxWidth: 560 }}>
            This page is a native screen on iOS and Android, and a statically rendered,
            SEO-ready web page — from the same file. Edit app/index.tsx to make it yours.
          </Text>
          <Flex direction="row" gap="md" wrap="wrap" justify="center">
            <Button
              title="Get started"
              variant="filled"
              onPress={() => Linking.openURL('https://platform-blocks.com/getting-started')}
            />
            <Button
              title="Browse components"
              variant="outline"
              onPress={() => Linking.openURL('https://platform-blocks.com/components')}
            />
          </Flex>
        </Column>
        <FeatureGrid />
      </ScrollView>
    </>
  );
}

import { PlatformBlocksProvider } from '@platform-blocks/ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer, { act } from 'react-test-renderer';

import { FeatureGrid } from '../components/FeatureGrid';

const TEST_SAFE_AREA_METRICS = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe('FeatureGrid', () => {
  it('renders every feature card', async () => {
    let tree: renderer.ReactTestRenderer;
    await act(async () => {
      tree = renderer.create(
        <SafeAreaProvider initialMetrics={TEST_SAFE_AREA_METRICS}>
          <PlatformBlocksProvider>
            <FeatureGrid />
          </PlatformBlocksProvider>
        </SafeAreaProvider>
      );
    });

    const json = JSON.stringify(tree!.toJSON());
    expect(json).toContain('Native performance');
    expect(json).toContain('A real website too');

    await act(async () => {
      tree!.unmount();
    });
  });
});

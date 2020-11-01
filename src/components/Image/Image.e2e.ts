import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { imageTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('image', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Image',
    withExamples: true,
  });
  const dataHook = 'storybook-Image';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = imageTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Image');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

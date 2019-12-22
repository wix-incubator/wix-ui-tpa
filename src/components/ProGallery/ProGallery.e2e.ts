import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { proGalleryTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('proGallery', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'ProGallery',
    withExamples: true,
  });
  const dataHook = 'storybook-ProGallery';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = proGalleryTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find ProGallery');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

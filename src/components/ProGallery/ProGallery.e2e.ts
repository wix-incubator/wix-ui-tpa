import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import * as eyes from 'eyes.it';
import { proGalleryTestkitFactory } from '../../testkit/protractor';

const ARROW_DIRECTION = {
  Next: 'next',
  Back: 'back',
};
/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('proGallery', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'ProGallery',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-ProGallery';

  beforeEach(() => browser.get(storyUrl));
  describe('Thumbnail gallery', () => {
    eyes.it('should render gallery', async () => {
      const driver = proGalleryTestkitFactory({ dataHook });
      const element = await driver.element();
      await waitForVisibilityOf(element, 'Cannot find ProGallery');
      expect(await driver.exists()).toBe(true);
    });
    eyes.it('Arrows should be clickable', async () => {
      // not working yet.
      const driver = proGalleryTestkitFactory({ dataHook });
      const element = await driver.getArrowsShown();
      await waitForVisibilityOf(element, 'Cannot find ProGallery');
      await driver.clickOnArrow(ARROW_DIRECTION.Next);
      await waitForVisibilityOf(
        await driver.element(),
        'Cannot find ProGallery',
      );
      expect(true).toBe(true);
    });
  });
});

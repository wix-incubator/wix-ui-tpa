import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { socialBarTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('socialBar', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'SocialBar',
    withExamples: true,
  });
  const dataHook = 'storybook-SocialBar';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = socialBarTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find SocialBar');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

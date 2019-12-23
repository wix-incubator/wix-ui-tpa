import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { shareButtonTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('shareButton', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components/Share',
    story: 'ShareButton',
    withExamples: true,
  });
  const dataHook = 'storybook-ShareButton';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = shareButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find ShareButton',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

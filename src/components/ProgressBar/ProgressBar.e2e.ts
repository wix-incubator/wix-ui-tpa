import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { progressBarTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('progressBar', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'ProgressBar',
    withExamples: true,
  });
  const dataHook = 'storybook-ProgressBar';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = progressBarTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find ProgressBar');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

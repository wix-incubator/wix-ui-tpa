import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { copyUrlButtonTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('copyUrlButton', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'CopyUrlButton',
    withExamples: true,
  });
  const dataHook = 'storybook-CopyUrlButton';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = copyUrlButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find CopyUrlButton',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

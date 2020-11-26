import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { copyUrlButtonTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('copyUrlButton', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'CopyUrlButton',
    withExamples: true,
  });
  const dataHook = 'storybook-CopyUrlButton';

  beforeEach(() => browser.get(storyUrl));

  it('should copy text', async () => {
    const driver = copyUrlButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find CopyUrlButton',
    );

    const buttonEl = await driver.element();

    expect(buttonEl.isDisplayed()).toBe(true);

    await buttonEl.click();
    const text = await browser.executeAsyncScript(
      'navigator.clipboard.readText().then(arguments[arguments.length - 1], arguments[arguments.length - 1])',
    );
    expect(text).toEqual('wix.com');
  });
});

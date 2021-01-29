import * as eyes from 'eyes.it';
import { browser, by, element, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('RadioButton', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'RadioButton',
  });
  const initialFocusElementId = 'initial-focus';

  beforeEach(async () => {
    browser.get(storyUrl);
    const focusElement = element(by.id(initialFocusElementId));

    await waitForVisibilityOf(await focusElement, 'Cannot find radioButton');

    return focusElement.click();
  });

  eyes.it('should show the correct design on focus theme box', async () => {
    await browser.actions().sendKeys(Key.TAB);
  });

  eyes.it('should show the correct design on focus theme default', async () => {
    await browser.actions().sendKeys(Key.TAB, Key.ARROW_DOWN);
  });

  eyes.it(
    'should show the correct design on focus theme default on mobile',
    async () => {
      await browser.actions().sendKeys(Key.TAB, Key.ARROW_DOWN, Key.ARROW_DOWN);
    },
  );
});

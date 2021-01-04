import * as eyes from 'eyes.it';
import { browser, by, element, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { addItemTestkitFactory } from '../../testkit/protractor';
import { DATA_HOOKS } from './constants';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('AddItem', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'AddItem',
    withExamples: true,
  });
  const dataHook = 'storybook-AddItem';
  let driver;
  let addItemElement;

  beforeEach(async () => {
    browser.get(storyUrl);
    driver = addItemTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find AddItem');

    addItemElement = element(by.css(`[data-hook="${DATA_HOOKS.ADD_ITEM}"]`));
    expect(addItemElement.isDisplayed()).toBe(true);
  });

  eyes.it('should show the correct design on hover', async () => {
    browser.actions().mouseMove(addItemElement).perform();
  });

  eyes.it('should show the correct design on focus', async () => {
    await driver.click();

    addItemElement.sendKeys(Key.TAB);
    addItemElement.sendKeys(Key.SHIFT, Key.TAB);

    expect(
      await (await browser.driver.switchTo().activeElement()).getAttribute(
        'data-hook',
      ),
    ).toBe(DATA_HOOKS.ADD_ITEM);
  });
});

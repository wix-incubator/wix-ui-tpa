import * as eyes from 'eyes.it';
import { browser, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { radioButtonTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('RadioButton', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'RadioButton',
  });
  const defaultThemeDataHook = 'radio-button-default';
  const boxThemeDataHook = 'radio-button-box';
  const defaultThemeMobileDataHook = 'radio-button-default-mobile';
  let driver;

  beforeEach(async () => {
    browser.get(storyUrl);
  });

  eyes.it('should show the correct design on focus theme box', async () => {
    driver = radioButtonTestkitFactory({ dataHook: boxThemeDataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find radioButton',
    );
    await driver.clickInput();
    await browser.actions().sendKeys(Key.ARROW_DOWN, Key.ARROW_UP);
    expect(await driver.isFocused()).toBeTruthy();
  });

  eyes.it('should show the correct design on focus theme default', async () => {
    driver = radioButtonTestkitFactory({ dataHook: defaultThemeDataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find radioButton',
    );
    await driver.clickInput();
    await browser.actions().sendKeys(Key.ARROW_DOWN, Key.ARROW_UP);
    expect(await driver.isFocused()).toBeTruthy();
  });

  eyes.it(
    'should show the correct design on focus theme default on mobile',
    async () => {
      driver = radioButtonTestkitFactory({
        dataHook: defaultThemeMobileDataHook,
      });
      await waitForVisibilityOf(
        await driver.element(),
        'Cannot find radioButton',
      );
      await driver.clickInput();
      await browser.actions().sendKeys(Key.ARROW_DOWN, Key.ARROW_UP);
    },
  );
});

import * as eyes from 'eyes.it';
import { browser } from 'protractor';
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
    withExamples: true,
  });
  const boxThemeDataHook = 'radio-button-box';
  const defaultThemeDataHook = 'radio-button-default';
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
  });

  eyes.it('should show the correct design on focus theme default', async () => {
    driver = radioButtonTestkitFactory({ dataHook: defaultThemeDataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find radioButton',
    );
    await driver.clickInput();
  });
});

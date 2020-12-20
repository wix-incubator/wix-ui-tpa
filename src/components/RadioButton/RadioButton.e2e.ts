import * as eyes from 'eyes.it';
import { browser, by, element, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { radioButtonTestkitFactory } from '../../testkit/protractor';
import { RADIOBUTTON_DATA_HOOKS } from './dataHooks';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('AddItem', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'RadioButton',
    withExamples: true,
  });
  const dataHook = 'storybook-RadioButton';
  let driver;

  beforeEach(async () => {
    browser.get(storyUrl);
    driver = radioButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find radioButton');

    expect((await driver.element()).isDisplayed()).toBe(true);
  });

  eyes.it('should show the correct design on focus', async () => {
    await driver.clickInput();
    expect(await driver.isFocused()).toBeTruthy();
  });
});

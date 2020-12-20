import * as eyes from 'eyes.it';
import { browser, by, element, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { radioButtonTestkitFactory } from '../../testkit/protractor';
import { RADIOBUTTON_DATA_HOOKS } from './dataHooks';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('RadioButton', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'RadioButton',
    withExamples: true,
  });
  const dataHook = 'storybook-RadioButton';
  let driver;
  let radioButtonElement;

  beforeEach(async () => {
    browser.get(storyUrl);
    driver = radioButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find radioButton',
    );

    radioButtonElement = element(by.css(`[data-hook="${RADIOBUTTON_DATA_HOOKS.coreRadioButton}"]`));
    expect(radioButtonElement.isDisplayed()).toBe(true);
  });

  eyes.it('should show the correct design on focus', async () => {
    await driver.click();
    radioButtonElement.click();
    expect(
      await (await browser.driver.switchTo().activeElement()).getAttribute(
        'data-hook',
      ),
    ).toBe(RADIOBUTTON_DATA_HOOKS.coreRadioButton);
  });
});

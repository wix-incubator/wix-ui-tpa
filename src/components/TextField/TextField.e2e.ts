import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { textFieldTestkitFactory } from '../../testkit/protractor';
import { dataHooks } from './docs/testData';

['TextFieldLTR', 'TextFieldRLT'].forEach(story => {
  describe(`Visual tests ${story}`, () => {
    beforeAll(async () => {
      const storyUrl = createStoryUrl({
        kind: 'Tests',
        story,
        withExamples: true,
      });
      await browser.get(storyUrl);
    });

    dataHooks.forEach(dataHook => {
      eyes.it(`${story}-${dataHook}-hover`, async () => {
        const driver = textFieldTestkitFactory({ dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find TextField');
        expect(await driver.element().isDisplayed()).toBe(true);
        await driver.hover();
      });

      eyes.it(`${story}-${dataHook}-focus`, async () => {
        const driver = textFieldTestkitFactory({ dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find TextField');
        expect(await driver.element().isDisplayed()).toBe(true);
        await driver.focus();
      });
    });
  });
});

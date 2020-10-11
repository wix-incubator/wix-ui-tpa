import * as eyes from 'eyes.it';
import { browser, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { addItemTestkitFactory } from '../../testkit/protractor';

describe('AddItem', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'AddItem',
    withExamples: true,
  });
  const dataHook = 'storybook-AddItem';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should show the correct design on hover', async () => {
    const driver = addItemTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find AddItem');
    expect((await driver.element()).isDisplayed()).toBe(true);

    browser
      .actions()
      .mouseMove(await driver.element())
      .perform();
  });

  eyes.it('should show the correct design on focus', async () => {
    const driver = addItemTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find AddItem');
    expect((await driver.element()).isDisplayed()).toBe(true);

    await driver.click();

    const addItemElement = await driver.element();
    addItemElement.sendKeys(Key.TAB);
    addItemElement.sendKeys(Key.SHIFT, Key.TAB);

    expect(
      await (await browser.driver.switchTo().activeElement()).getAttribute(
        'data-hook',
      ),
    ).toBe(dataHook);
  });
});

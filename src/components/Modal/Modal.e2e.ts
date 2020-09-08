import { browser, element, by, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { modalTestkitFactory } from '../../testkit/protractor';

describe('modal', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'Modal',
    withExamples: true,
  });
  const dataHook = 'e2e-storybook-modal-wrapper';
  const firstInputClassName = 'e2e-storybook-modal-input-first';
  const secondInputClassName = 'e2e-storybook-modal-input-second';
  const closeDataHook = 'tpa-modal-close-btn';

  beforeEach(() => browser.get(storyUrl));

  it('should show and close correctly', async () => {
    const driver = modalTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Modal');
    const close = element(by.css(`[data-hook=${closeDataHook}]`));

    expect(await driver.isModalShowed()).toBe(false);
    element(by.css('[data-hook=e2e-storybook-modal-open-btn]')).click();
    await new Promise(resolve => setTimeout(resolve, 300));
    expect(await driver.isModalShowed()).toBe(true);
    await close.click();
    await new Promise(resolve => setTimeout(resolve, 300));
    expect(await driver.isModalShowed()).toBe(false);

    expect((await driver.element()).isDisplayed()).toBe(true);
  });

  it('should work correctly with the focus trap', async () => {
    const driver = modalTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Modal');

    element(by.css('[data-hook=e2e-storybook-modal-open-btn]')).click();
    await new Promise(resolve => setTimeout(resolve, 300));

    const firstInput = element(by.css(`.${firstInputClassName}`));
    const secondInput = element(by.css(`.${secondInputClassName}`));
    const close = element(by.css(`[data-hook=${closeDataHook}]`));

    firstInput.click();
    firstInput.sendKeys(Key.TAB);

    expect(
      await (await browser.driver.switchTo().activeElement()).getAttribute(
        'className',
      ),
    ).toBe(secondInputClassName);

    await new Promise(resolve => setTimeout(resolve, 300));
    secondInput.sendKeys(Key.TAB);
    close.sendKeys(Key.TAB);

    expect(
      await (await browser.driver.switchTo().activeElement()).getAttribute(
        'className',
      ),
    ).toBe(firstInputClassName);
  });
});

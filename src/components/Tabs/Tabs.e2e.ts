import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tabsTestkitFactory } from '../../testkit/protractor';
import { NavButtonOptions } from './Tabs';

describe('Tabs', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'Tabs',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-Tabs';

  beforeEach(async () => {
    await browser.get(storyUrl);
  });

  it('should show nav buttons + click should scroll nav', async () => {
    const driver = tabsTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Tabs');
    expect(await driver.getNavButtonsShown()).toBe(NavButtonOptions.right);

    await driver.clickRightNavButton();
    await browser.sleep(400);
    expect(await driver.getNavButtonsShown()).toBe(NavButtonOptions.both);

    while ((await driver.getNavButtonsShown()) === NavButtonOptions.both) {
      await driver.clickRightNavButton();
      await browser.sleep(400);
    }

    expect(await driver.getNavButtonsShown()).toBe(NavButtonOptions.left);

    await driver.clickLeftNavButton();
    await browser.sleep(400);
    expect(await driver.getNavButtonsShown()).toBe(NavButtonOptions.both);

    while ((await driver.getNavButtonsShown()) === NavButtonOptions.both) {
      await driver.clickLeftNavButton();
      await browser.sleep(400);
    }

    expect(await driver.getNavButtonsShown()).toBe(NavButtonOptions.right);
  });
});

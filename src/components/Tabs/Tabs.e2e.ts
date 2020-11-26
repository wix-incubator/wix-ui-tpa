import * as eyes from 'eyes.it';
import { browser, by, element } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tabsTestkitFactory } from '../../testkit/protractor';
import { NavButtonOptions } from './constants';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('Tabs', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'Tabs',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-Tabs';
  const rootId = 'tabs-test-root';

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

  async function scrollToEnd(driver, direction) {
    const navShown = await driver.getNavButtonsShown();

    if (navShown === NavButtonOptions.both || navShown === direction) {
      if (direction === NavButtonOptions.right) {
        await driver.clickRightNavButton();
      } else {
        await driver.clickLeftNavButton();
      }

      await browser.sleep(600);

      return scrollToEnd(driver, direction);
    }
  }

  ['ltr', 'rtl'].forEach((direction: 'ltr' | 'rtl') => {
    const forwardSide = direction === 'ltr' ? 'right' : 'left';

    describe(`Tabs/Scroll - ${direction}`, () => {
      async function setDirection() {
        const rootElement = await element(by.id(rootId));
        await browser.executeScript(
          `arguments[0].setAttribute('dir','${direction}');`,
          rootElement,
        );
        await browser.sleep(400);
      }

      eyes.it(`${forwardSide} nav button only`, async () => {
        const driver = tabsTestkitFactory({ dataHook });
        await waitForVisibilityOf(await driver.element(), 'Cannot find Tabs');
        await setDirection();
        await browser.sleep(400);
      });

      eyes.it('both nav buttons', async () => {
        const driver = tabsTestkitFactory({ dataHook });
        await waitForVisibilityOf(await driver.element(), 'Cannot find Tabs');

        await setDirection();

        if (direction === 'ltr') {
          await driver.clickRightNavButton();
        } else {
          await driver.clickLeftNavButton();
        }
        await browser.sleep(400);
      });

      eyes.it(`scroll to ${forwardSide} end`, async () => {
        const driver = tabsTestkitFactory({ dataHook });
        await waitForVisibilityOf(await driver.element(), 'Cannot find Tabs');

        await setDirection();

        await scrollToEnd(
          driver,
          direction === 'ltr' ? NavButtonOptions.right : NavButtonOptions.left,
        );
        await browser.sleep(400);
      });
    });
  });
});

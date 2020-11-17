import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tabsTestkitFactory } from '../../testkit/protractor';
import { NavButtonOptions } from './constants';
import { storiesOf } from '@storybook/react';
import { delay } from '../../test/utils';
import * as React from 'react';

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

  async function scrollToEnd(driver, direction) {
    const navShown = await driver.getNavButtonsShown();

    if (navShown === NavButtonOptions.both || navShown === direction) {
      if (direction === NavButtonOptions.right) {
        await driver.clickRightNavButton();
      } else {
        await driver.clickLeftNavButton();
      }

      await delay(600);

      return scrollToEnd(driver, direction);
    }
  }

  ['ltr', 'rtl'].forEach((direction: 'ltr' | 'rtl') => {
    const forwardSide = direction === 'ltr' ? 'right' : 'left';

    describe(`Tabs/Scroll - ${direction}`, () => {
      eyes.it(`${forwardSide} nav button only`, async () => {
        const driver = tabsTestkitFactory({ dataHook });
        await waitForVisibilityOf(await driver.element(), 'Cannot find Tabs');
      });

      eyes.it('both nav buttons', async () => {
        const driver = tabsTestkitFactory({ dataHook });
        await waitForVisibilityOf(await driver.element(), 'Cannot find Tabs');
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
        await scrollToEnd(
          driver,
          direction === 'ltr' ? NavButtonOptions.right : NavButtonOptions.left,
        );
        await browser.sleep(400);
      });
    });
  });
});

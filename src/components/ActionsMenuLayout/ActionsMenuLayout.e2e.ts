import * as eyes from 'eyes.it';
import { browser, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';
import { actionsMenuLayoutTestkitFactory } from '../../testkit/protractor';
import { ActionsMenuLayoutDriver } from './ActionsMenuLayout.driver';
import { ACTIONS_MENU_E2E_DATA_HOOK } from './dataHooks';

describe('ActionsMenuLayout', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'ActionsMenuLayout',
    withExamples: true,
  });
  let driver: ActionsMenuLayoutDriver;

  beforeEach(async () => {
    browser.get(storyUrl);
    driver = actionsMenuLayoutTestkitFactory({
      dataHook: ACTIONS_MENU_E2E_DATA_HOOK,
    });

    await waitForVisibilityOf(await driver.element(), 'Cannot find element');
  });

  eyes.it('should focus on second item on initial load', async () => {
    await browser.sleep(200);
  });

  eyes.it('should focus first item in list after tab focus', async () => {
    await browser.actions().sendKeys(Key.TAB).perform();
    await browser.actions().sendKeys(Key.TAB).perform();
    await browser.sleep(200);
  });

  eyes.it('should focus second item after using arrows', async () => {
    await browser.actions().sendKeys(Key.ARROW_DOWN).perform();
    await browser.sleep(200);
  });
});

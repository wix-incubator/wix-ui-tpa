import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tooltipTestkitFactory } from '../../testkit/protractor';
import { testPropsList } from './docs/testProps';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('Tooltip', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'Tooltip',
    withExamples: true,
  });

  beforeEach(() => browser.get(storyUrl));

  testPropsList.forEach((prop) => {
    const dataHook = prop['data-hook'];
    eyes.it(`Visual test: ${dataHook}`, async () => {
      const driver = tooltipTestkitFactory({ dataHook });
      await waitForVisibilityOf(driver.element(), 'Cannot find Tooltip');
      expect(await driver.element().isDisplayed()).toBe(true);
      await driver.mouseEnter();
      expect(await driver.isContentElementExists()).toBeTruthy();
    });
  });
});

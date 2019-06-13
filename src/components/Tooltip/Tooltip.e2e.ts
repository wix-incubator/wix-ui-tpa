import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tooltipTestkitFactory } from '../../testkit/protractor';

describe('Tooltip', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Tooltip',
    withExamples: true,
  });
  const dataHook = 'story-tooltip';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = tooltipTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Tooltip');
    expect(await driver.element().isDisplayed()).toBe(true);
    await driver.mouseEnter();
    expect(await driver.isContentElementExists()).toBeTruthy();
  });
});

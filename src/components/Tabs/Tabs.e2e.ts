import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tabsTestkitFactory } from '../../testkit/protractor';

describe('Tabs', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Tabs',
    withExamples: true,
  });
  const dataHook = 'storybook-Tabs';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = tabsTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Tabs');
    expect(await driver.element().isDisplayed()).toBe(true);
  });
});

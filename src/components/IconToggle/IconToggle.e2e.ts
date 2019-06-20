import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { iconToggleTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('iconToggle', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'IconToggle',
    withExamples: true,
  });
  const dataHook = 'storybook-IconToggle';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = iconToggleTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find IconToggle');
    expect(await driver.element().isDisplayed()).toBe(true);
  });
});

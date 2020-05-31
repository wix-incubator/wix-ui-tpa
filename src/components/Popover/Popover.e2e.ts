import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { popoverTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('popover', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Popover',
    withExamples: true,
  });
  const dataHook = 'storybook-Popover';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = popoverTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Popover');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

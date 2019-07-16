import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { badgeTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('badge', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Badge',
    withExamples: true,
  });
  const dataHook = 'storybook-Badge';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = badgeTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Badge');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

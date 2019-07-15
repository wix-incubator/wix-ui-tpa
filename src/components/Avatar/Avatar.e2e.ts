import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { avatarTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('avatar', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Avatar',
    withExamples: true,
  });
  const dataHook = 'storybook-Avatar';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = avatarTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Avatar');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

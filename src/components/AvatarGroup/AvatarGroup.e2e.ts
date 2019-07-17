import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { avatarGroupTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('avatarGroup', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'AvatarGroup',
    withExamples: true,
  });
  const dataHook = 'storybook-AvatarGroup';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = avatarGroupTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find AvatarGroup',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { sectionNotificationTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('sectionNotification', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'SectionNotification',
    withExamples: true,
  });
  const dataHook = 'storybook-SectionNotification';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = sectionNotificationTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find SectionNotification',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

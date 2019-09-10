import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { weeklyCalendarTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('weeklyCalendar', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'WeeklyCalendar',
    withExamples: true,
  });
  const dataHook = 'storybook-WeeklyCalendar';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = weeklyCalendarTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find WeeklyCalendar',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

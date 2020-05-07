import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { calendarCellTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('calendarCell', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'CalendarCell',
    withExamples: true,
  });
  const dataHook = 'storybook-CalendarCell';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = calendarCellTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find CalendarCell');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

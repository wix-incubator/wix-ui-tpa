import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { CalendarTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('Calendar', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Calendar',
    withExamples: true,
  });
  const dataHook = 'storybook-Calendar';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = CalendarTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find Calendar',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

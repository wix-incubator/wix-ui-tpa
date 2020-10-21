import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { datePickerTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('datePicker', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'DatePicker',
    withExamples: true,
  });
  const dataHook = 'storybook-DatePicker';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = datePickerTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find DatePicker');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { pickerTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('picker', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Picker',
    withExamples: true,
  });
  const dataHook = 'storybook-Picker';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = pickerTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Picker');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

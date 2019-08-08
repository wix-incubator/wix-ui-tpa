import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { checkboxTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('checkbox', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Checkbox',
    withExamples: true,
  });
  const dataHook = 'storybook-Checkbox';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = checkboxTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Checkbox');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { dropdownTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('dropdown', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Dropdown',
    withExamples: true,
  });
  const dataHook = 'storybook-Dropdown';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = dropdownTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Dropdown');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { floatingDropdownTestkitFactory } from '../../testkit/protractor';

describe('floatingDropdown', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'FloatingDropdown',
    withExamples: true,
  });
  const dataHook = 'storybook-FloatingDropdown';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = floatingDropdownTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find FloatingDropdown',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

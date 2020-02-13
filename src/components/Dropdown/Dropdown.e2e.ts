import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import {
  dropdownTestkitFactory,
  buttonTestkitFactory,
} from '../../testkit/protractor';

describe('Dropdown', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'Dropdown',
  });
  const dataHookPrefix = 'storybook-e2e-';

  beforeEach(async () => {
    await browser.get(storyUrl);
  });

  it('should change selected value displayed, on options change', async () => {
    const dropdownDriver = dropdownTestkitFactory({
      dataHook: `${dataHookPrefix}Dropdown`,
    });
    const buttonDriver = buttonTestkitFactory({
      dataHook: `${dataHookPrefix}Button`,
    });

    await waitForVisibilityOf(
      await dropdownDriver.element(),
      'Cannot find Dropdown',
    );

    await waitForVisibilityOf(
      await buttonDriver.element(),
      'Cannot find Button',
    );

    let selectedValue = await dropdownDriver.getDisplayedSelectedValue();

    expect(selectedValue.startsWith('value 1')).toBeTruthy();

    await buttonDriver.click();

    selectedValue = await dropdownDriver.getDisplayedSelectedValue();

    expect(selectedValue.startsWith('Option 1')).toBeTruthy();
  });
});

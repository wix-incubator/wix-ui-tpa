import * as eyes from 'eyes.it';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { autocompleteTestkitFactory } from '../../testkit/protractor';
import { browser } from 'protractor';

describe('Autocomplete', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Autocomplete',
    withExamples: true,
  });
  const dataHook = 'storybook-autocomplete';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render autocomplete', async () => {
    const driver = autocompleteTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Autocomplete');
    expect(await driver.element().isDisplayed()).toBe(true);
  });

  eyes.it('sh0uld open the dropdown on click', async () => {
    const driver = autocompleteTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Autocomplete');
    await driver.click();
    expect(
      await driver
        .dropdownContent()
        .optionAt(0)
        .getText(),
    ).toBe('value0');
  });
});

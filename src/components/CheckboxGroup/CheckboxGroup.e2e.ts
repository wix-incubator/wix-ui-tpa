import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { checkboxGroupTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('checkboxGroup', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'CheckboxGroup',
    withExamples: true,
  });
  const dataHook = 'storybook-CheckboxGroup';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = checkboxGroupTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find CheckboxGroup');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

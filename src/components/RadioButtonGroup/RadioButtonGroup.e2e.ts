import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { radioButtonGroupTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('radioButtonGroup', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'RadioButtonGroup',
    withExamples: true,
  });
  const dataHook = 'storybook-RadioButtonGroup';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = radioButtonGroupTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find RadioButtonGroup');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

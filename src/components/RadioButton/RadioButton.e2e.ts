import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { radioButtonTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('radioButton', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'RadioButton',
    withExamples: true,
  });
  const dataHook = 'storybook-RadioButton';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = radioButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find RadioButton',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

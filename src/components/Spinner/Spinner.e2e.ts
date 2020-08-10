import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { spinnerTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('spinner', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Spinner',
    withExamples: true,
  });
  const dataHook = 'storybook-Spinner';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = spinnerTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Spinner');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

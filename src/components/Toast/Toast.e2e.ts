import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { toastTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('toast', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Toast',
    withExamples: true,
  });
  const dataHook = 'storybook-Toast';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = toastTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Toast');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

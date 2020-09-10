import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { dialogTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('dialog', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Dialog',
    withExamples: true,
  });
  const dataHook = 'storybook-Dialog';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = dialogTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Dialog');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

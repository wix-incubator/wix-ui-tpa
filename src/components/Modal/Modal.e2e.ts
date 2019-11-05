import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { modalTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('modal', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Modal',
    withExamples: true,
  });
  const dataHook = 'storybook-Modal';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = modalTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Modal');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

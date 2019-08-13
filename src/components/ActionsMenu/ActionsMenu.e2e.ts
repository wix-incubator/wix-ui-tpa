import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { actionsMenuTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('actionsMenu', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'ActionsMenu',
    withExamples: true,
  });
  const dataHook = 'storybook-ActionsMenu';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = actionsMenuTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find ActionsMenu',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

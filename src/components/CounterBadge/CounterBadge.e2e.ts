import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { counterBadgeTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('counterBadge', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'CounterBadge',
    withExamples: true,
  });
  const dataHook = 'storybook-CounterBadge';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = counterBadgeTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find CounterBadge',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { newCardTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('newCard', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'NewCard',
    withExamples: true,
  });
  const dataHook = 'storybook-NewCard';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = newCardTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find NewCard');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

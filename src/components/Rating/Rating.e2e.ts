import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { ratingTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('rating', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Rating',
    withExamples: true,
  });
  const dataHook = 'storybook-Rating';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = ratingTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Rating');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

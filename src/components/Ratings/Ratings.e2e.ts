import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { ratingsTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('ratings', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Ratings',
    withExamples: true,
  });
  const dataHook = 'storybook-Ratings';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = ratingsTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Ratings');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });

  it('should hover correct numbers of stars', async () => {
    const driver = ratingsTestkitFactory({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Ratings');

    await driver.hoverStar(3);

    expect(await driver.getHoveredStars()).toBe(3);
  });
});

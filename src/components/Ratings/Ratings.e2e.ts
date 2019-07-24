import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { ratingsTestkitFactory } from '../../testkit/protractor';
import {} from './dataHooks';

describe('Ratings', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'Ratings',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-Ratings';
  const dataHookWithInitialValue = 'storybook-e2e-Ratings-withValue';

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

  it('should hover correct numbers of stars with value in mode="input"', async () => {
    const driver = ratingsTestkitFactory({
      dataHook: dataHookWithInitialValue,
    });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Ratings');

    await driver.hoverStar(2);

    expect(await driver.getHoveredStars()).toBe(2);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { ratingsTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('Ratings', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'Ratings',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-Ratings';
  const dataHookWithInitialValue = 'storybook-e2e-Ratings-withValue';
  const dataHookHoverOption = 'storybook-e2e-Ratings-inputOption';
  const dataHookHoverOptionWithInitialValue =
    'storybook-e2e-Ratings-inputOptionWithValue';

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

  it('should show correspoding hover option', async () => {
    const driver = ratingsTestkitFactory({
      dataHook: dataHookHoverOption,
    });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Ratings');

    await driver.hoverStar(2);

    expect(await driver.getHoveredLabelText()).toBe('Baasa');
  });

  it('should show correspoding hover option with initial value', async () => {
    const driver = ratingsTestkitFactory({
      dataHook: dataHookHoverOptionWithInitialValue,
    });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Ratings');

    await driver.hoverStar(4);

    expect(await driver.getHoveredLabelText()).toBe('Magniv');
  });
});

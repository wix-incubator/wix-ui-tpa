import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { dotNavigationTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('DotNavigation', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'DotNavigation',
    withExamples: true,
  });
  const dataHook = 'storybook-DotNavigation';

  beforeEach(() => browser.get(storyUrl));

  it('not selected dot color should change to selected while clicking it', async () => {
    const driver = dotNavigationTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find DotNavigation',
    );

    const firstDot = driver.getDot(1);
    const native = await firstDot.getNative();

    expect(await native.getCssValue('opacity')).toBe('0.4');

    await firstDot.click();

    expect(await native.getCssValue('opacity')).toBe('1');
  });

  it('not selected dot color should change to selected while hovering over it', async () => {
    const driver = dotNavigationTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find DotNavigation',
    );

    const firstDot = driver.getDot(1);
    const native = await firstDot.getNative();

    expect(await native.getCssValue('opacity')).toBe('0.4');

    await firstDot.hover();

    expect(await native.getCssValue('opacity')).toBe('1');
  });
});

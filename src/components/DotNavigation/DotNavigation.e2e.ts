import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { dotNavigationTestkitFactory } from '../../testkit/protractor';
import * as eyes from 'eyes.it';

const selectedDotColor = 'rgba(96, 96, 96, 1)';

describe('DotNavigation', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'DotNavigation',
    withExamples: true,
  });
  const dataHook = 'storybook-DotNavigation';

  beforeEach(() => browser.get(storyUrl));

  eyes.it(
    'not selected dot color should change to selected while clicking it',
    async () => {
      const driver = dotNavigationTestkitFactory({ dataHook });

      await waitForVisibilityOf(
        await driver.element(),
        'Cannot find DotNavigation',
      );

      const firstDot = driver.getDot(1);

      await firstDot.click();

      const native = await firstDot.getNative();

      expect(await native.getCssValue('background-color')).toBe(
        selectedDotColor,
      );
    },
  );

  eyes.it(
    'not selected dot color should change to selected while hovering over it',
    async () => {
      const driver = dotNavigationTestkitFactory({ dataHook });

      await waitForVisibilityOf(
        await driver.element(),
        'Cannot find DotNavigation',
      );

      const firstDot = driver.getDot(1);

      await firstDot.hover();

      const native = await firstDot.getNative();

      expect(await native.getCssValue('background-color')).toBe(
        selectedDotColor,
      );
    },
  );
});

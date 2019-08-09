import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { toggleSwitchTestkitFactory } from '../../testkit/protractor';

describe('ToggleSwitch', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'ToggleSwitch',
    withExamples: true,
  });
  const dataHook = 'storybook-ToggleSwitch';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = toggleSwitchTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find ToggleSwitch',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

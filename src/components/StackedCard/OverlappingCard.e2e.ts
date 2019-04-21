import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { cardTestkitFactory } from '../../testkit/protractor';

describe('StackedCard', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'StackedCard',
    withExamples: true,
  });
  const dataHook = 'storybook-StackedCard';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = cardTestkitFactory({ dataHook });
    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find StackedCard',
    );
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { iconButtonTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('iconButton', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'IconButton',
    withExamples: true,
  });
  const dataHook = 'storybook-IconButton';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = iconButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find IconButton');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { addItemTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('addItem', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'AddItem',
    withExamples: true,
  });
  const dataHook = 'storybook-AddItem';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = addItemTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find AddItem');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

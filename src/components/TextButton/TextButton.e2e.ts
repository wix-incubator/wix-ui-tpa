import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { textButtonTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('textButton', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'TextButton',
    withExamples: true,
  });
  const dataHook = 'storybook-TextButton';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = textButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find TextButton');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

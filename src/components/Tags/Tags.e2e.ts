import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { tagsTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('tags', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Tags',
    withExamples: true,
  });
  const dataHook = 'storybook-Tags';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = tagsTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Tags');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { paginationTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('pagination', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'Pagination',
    withExamples: true,
  });
  const dataHook = 'storybook-Pagination';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = paginationTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Autocomplete');
    expect(await driver.element().isDisplayed()).toBe(true);
  });
});

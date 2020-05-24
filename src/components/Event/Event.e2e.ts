import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { eventTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('event', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Event',
    withExamples: true,
  });
  const dataHook = 'storybook-Event';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = eventTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Event');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

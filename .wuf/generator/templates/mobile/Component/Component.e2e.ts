import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { {%componentName%}TestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('{%componentName%}', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: '{%ComponentName%}',
    withExamples: true,
  });
  const dataHook = 'storybook-{%ComponentName%}';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = {%componentName%}TestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find {%ComponentName%}');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

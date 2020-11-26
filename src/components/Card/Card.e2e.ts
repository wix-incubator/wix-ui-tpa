import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { cardTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('Card', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'Card',
    withExamples: true,
  });
  const dataHook = 'storybook-Card';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = cardTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Card');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

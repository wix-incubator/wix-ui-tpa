import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { textTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('Text', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.COMPONENTS,
    story: 'Text',
    withExamples: true,
  });
  const dataHook = 'storybook-Text';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = textTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find Text');
    expect(await driver.element().isDisplayed()).toBe(true);
  });
});

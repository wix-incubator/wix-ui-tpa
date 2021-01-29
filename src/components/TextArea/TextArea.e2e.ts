import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { textAreaTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('TextArea', () => {
  const storyUrl = createStoryUrl({
    kind: `${StoryCategory.TESTS}/TextArea`,
    story: 'Max Length',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-TextArea';

  beforeEach(async () => {
    await browser.get(storyUrl);
  });

  it('should set max length of characters', async () => {
    const driver = textAreaTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find TextArea');
    const someLongText = 'some very very long text';
    await driver.typeText(someLongText);

    expect(await driver.value()).toBe(someLongText.substr(0, 3));
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
} from 'wix-ui-test-utils/protractor';
import { {%componentName%}TestkitFactory } from '../../testkit/protractor';

describe('{%componentName%}', () => {
  // For these e2e tests you will need a test story
  // you can define it under the ./docs folder in a {%componentName%}TestStory.tsx file
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: '{%ComponentName%}',
    withExamples: true,
  });
  const dataHook = 'storybook-{%ComponentName%}';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    // If the component needs a real browser environment for testing, use this file
    // If not, please remove this file
  });
});

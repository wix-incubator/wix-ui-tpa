import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {createStoryUrl} from 'wix-ui-test-utils/protractor';
import {inputTestkitFactory} from '../../testkit/protractor';

describe('Input', () => {
  const storyUrl = createStoryUrl({kind: 'Components', story: 'Input', withExamples: true});
  const dataHook = 'storybook-Input';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = inputTestkitFactory({dataHook});
    expect(driver.element().isDisplayed()).toBe(true);
  });
});

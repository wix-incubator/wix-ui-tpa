import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {createStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {checkboxTestkitFactory} from '../../testkit/protractor';

describe('Checkbox', () => {
  const storyUrl = createStoryUrl({kind: 'Components', story: 'Checkbox', withExamples: true});
  const dataHook = 'storybook-Checkbox';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = checkboxTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Checkbox');
    expect(driver.element().isDisplayed()).toBe(true);
  });
});

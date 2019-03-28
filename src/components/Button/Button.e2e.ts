import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { buttonTestkitFactory } from '../../testkit/protractor';

describe('Button', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'Button',
    withExamples: true,
  });
  const dataHook = 'storybook-Button';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = buttonTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Button');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { listCardTestkitFactory } from '../../testkit/protractor';

describe('listCard', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'ListCard',
    withExamples: true,
  });
  const dataHook = 'storybook-ListCard';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = listCardTestkitFactory({ dataHook });
    debugger;
    await waitForVisibilityOf(await driver.element(), 'Cannot find ListCard');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

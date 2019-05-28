import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { cardListTestkitFactory } from '../../testkit/protractor';

describe('cardList', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'CardList',
    withExamples: true,
  });
  const dataHook = 'storybook-CardList';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    const driver = cardListTestkitFactory({ dataHook });
    debugger;
    await waitForVisibilityOf(await driver.element(), 'Cannot find CardList');
    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { modalTestkitFactory } from '../../testkit/protractor';

describe('modal', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'Modal',
    withExamples: true,
  });
  const dataHook = 'e2e-storybook-modal-wrapper';

  beforeEach(() => browser.get(storyUrl));

  it('should render', async () => {
    const driver = modalTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Modal');

    expect(await driver.isModalShowed()).toBe(false);
    await driver.clickOnOpenButton();
    await new Promise(resolve => setTimeout(resolve, 300));
    expect(await driver.isModalShowed()).toBe(true);
    await driver.clickOnCloseButton();
    await new Promise(resolve => setTimeout(resolve, 300));
    expect(await driver.isModalShowed()).toBe(false);

    expect((await driver.element()).isDisplayed()).toBe(true);
  });
});

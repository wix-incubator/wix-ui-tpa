import { browser, element, by } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { avatarTestkitFactory } from '../../testkit/protractor';

describe('Avatar', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'Avatar',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-Avatar';

  beforeEach(async () => {
    await browser.get(storyUrl);
  });

  async function getImgNetworkResource(imgSrc) {
    const resources = (await browser.executeScript(
      'return window.performance.getEntriesByType("resource");',
    )) as any[];

    return resources.filter(item => item.name === imgSrc).length;
  }

  it('should call onload when img src is loaded', async () => {
    const driver = avatarTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find Avatar');
    const imgSrc = await driver.src();

    let imgRequestSent = (await getImgNetworkResource(imgSrc)) > 0;

    while (!imgRequestSent) {
      imgRequestSent = (await getImgNetworkResource(imgSrc)) > 0;
    }

    expect(await driver.getContentType()).toBe('image');
    expect(await driver.isImageLoaded()).toBe(true);
    expect(
      await element(by.css('[data-img-loaded="true"]')).isDisplayed(),
    ).toBe(true);
  });
});

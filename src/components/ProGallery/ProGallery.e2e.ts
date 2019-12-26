import { browser } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import * as eyes from 'eyes.it';
import { proGalleryTestkitFactory } from '../../testkit/protractor';

/**
 * For tests containing interactions.
 * Can be removed if not used.
 * */
describe('proGallery', () => {
  const storyUrl = createStoryUrl({
    kind: 'Tests',
    story: 'ProGallery',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-ProGallery';
  // const dataHook = 'item-container';
  // const dataHook = '#pro-gallery-container';
  // const dataHook = 'storybook-ProGallery';

  beforeEach(() => browser.get(storyUrl));

  eyes.fit('should render gallery', async () => {
    const driver = proGalleryTestkitFactory({ dataHook });
    const element = await driver.element();
    const toPrint = await waitForVisibilityOf(
      element,
      'Cannot find ProGallery',
    );
    // console.log('toPrint', Object.keys(element));
    // const test = await driver.getInnerHTML();
    // console.log('toPrint', test);
    expect(await driver.exists()).toBe(true);
    // await browser.sleep(10000);
    // await waitForVisibilityOf(await driver.element(), 'Cannot find ProGallery');
    // expect((await driver.element()).isDisplayed()).toBe(true);
  });
  // it('my test with puppeteer', async () => {
  //   const browser = await puppeteer.launch({ devtools: true });
  //   const page = await browser.newPage();
  //   await page.goto(`localhost:6006/${storyUrl}`);
  // });
  // eyes.fit('should click on ', async () => {
  //   const driver = proGalleryTestkitFactory({ dataHook });
  //   await driver.getGallerIdShown();
  //   await driver.clickOnArrow();
  //   await waitForVisibilityOf(await driver.element(), 'Cannot find ProGallery');
  //   await driver.clickOnArrow();
  //   expect(true).toBe(true);
  // });

  //   expect(true).toBe(true)
  //   const driver = proGalleryTestkitFactory({ dataHook });
  //   await waitForVisibilityOf(await driver.element(), 'Cannot find ProGallery');
  //   // console.log(
  //   //   await waitForVisibilityOf(
  //   //     await driver.element(),
  //   //     'Cannot find ProGallery',
  //   //   ),
  //   // );
  //   // await driver.clickOnArrow();
  //
  //   await browser.sleep(10000);
  //   await driver.clickOnArrow();
  //
  //   // expect(await driver.getArrowsShown()).toBe("[data-hook='nav-arrow-next']");
  //   // while ((await driver.getArrowsShown()) === "[data-hook='nav-arrow-next']") {
  //   //   await browser.sleep(10000);
  //   //   await driver.clickOnArrow();
  //   //   await browser.sleep(800);
  //   //   await driver.clickOnArrowBack();
  //   //   await browser.sleep(800);
  //   // }
  //
  //   // expect(await driver.hasArrow('back')).toBe(false);
  //   // await driver.clickOnArrow('next');
  //   // // expect(await driver.hasArrow('back')).toBe(true);
  //   // expect(await driver.hasArrow('next')).toBe(true);
  //   // await driver.clickOnArrow('next');
  // });
});

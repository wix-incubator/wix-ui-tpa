import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { tabsDriverFactory, TabsDriver } from './Tabs.driver';
import { ALIGNMENT, SKIN, Tabs, VARIANT, TabsProps, NavButtonOptions } from '.';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';
import { delay } from '../../test/utils';
import { storiesOf } from '@storybook/react';

const items = [0, 1, 2, 4].map(i => ({ title: `Title ${i}` }));
const createDriver = uniTestkitFactoryCreator(tabsDriverFactory);
const dataHook = 'storybook-e2e-Tabs';

interface TabsVisualProps {
  tabsProps: TabsProps;
  mobile: boolean;
  // onDone(TabsDriver): void;
  compact?: boolean;
}

async function scrollToEnd(driver: TabsDriver, direction) {
  const navShown = await driver.getNavButtonsShown();

  if (navShown === NavButtonOptions.both || navShown === direction) {
    if (direction === NavButtonOptions.right) {
      await driver.clickRightNavButton();
    } else {
      await driver.clickLeftNavButton();
    }

    console.log('Tabs.visual.tsx:33', 'Clicked nav button at', Date.now());
    await delay(1000);

    return scrollToEnd(driver, direction);
  }
}

class TabsVisual extends React.Component<TabsVisualProps> {
  static defaultProps = {
    tabsProps: {
      items: [
        { title: 'Title 1' },
        { title: 'Title 2' },
        { title: 'Title 3' },
        { title: 'Title 4' },
        { title: 'Title 5' },
        { title: 'Title 6' },
        { title: 'Title 7' },
        { title: 'Title 8' },
        { title: 'Title 9' },
        { title: 'Title 10' },
      ],
    },
    mobile: false,
    onDone: () => {},
  };

  state = {
    isReady: false,
  };

  componentDidMount(): void {
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        transition: none !important;
      }
    `;
    document.head.appendChild(style);

    onStyleProcessorDone()
      .then(async () => {
        await this._doScroll(
          createDriver({ wrapper: document.body, dataHook }),
        );
      })
      .catch(() => {});
  }

  async _doScroll(driver: TabsDriver) {
    await scrollToEnd(driver, NavButtonOptions.right);
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    const { tabsProps, mobile, compact } = this.props as any;
    const style = {
      margin: '10px',
      maxWidth: 200,
      ...(isReady ? { border: '1px solid red' } : {}),
    };

    console.log('Tabs.visual.tsx:95', 'isReady', isReady);

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <div style={style} data-ready={isReady}>
          <Tabs data-hook={dataHook} {...tabsProps} />
        </div>
      </TPAComponentsProvider>
    );
  }
}

// visualize('Tabs', () => {
//   const renderTest = (renderProps?: any, onDone?: (TabsDriver) => void) => {
//     const { props, mobile, compact } = renderProps;
//     onDone = onDone || (d => () => d());
//     return (
//       <TabsVisual
//         tabsProps={{
//           items,
//           activeTabIndex: 0,
//           ...props,
//         }}
//         compact={compact}
//         mobile={mobile}
//         onDone={onDone}
//       />
//     );
//   };
//
//   story('basic', () => {
//     snap('default', () => renderTest());
//
//     snap('mobile', () => renderTest({ mobile: true }));
//   });
//
//   story('Alignments', () => {
//     Object.values(ALIGNMENT).map(alignment => {
//       snap(alignment, () => renderTest({ props: { alignment } }));
//     });
//   });
//
//   story('Variants', () => {
//     Object.values(VARIANT).map(variant => {
//       snap(variant, () => renderTest({ props: { variant } }));
//     });
//   });
//
//   story('Skins', () => {
//     Object.values(SKIN).map(skin => {
//       snap(skin, () => renderTest({ props: { skin } }));
//     });
//   });
//
//   const lotsItems = [
//     { title: 'Title 1' },
//     { title: 'Title 2' },
//     { title: 'Title 3' },
//     { title: 'Title 4' },
//     { title: 'Title 5' },
//     { title: 'Title 6' },
//     { title: 'Title 7' },
//     { title: 'Title 8' },
//     { title: 'Title 9' },
//     { title: 'Title 10' },
//   ];
//
//   story('Scroll', () => {
//     async function scrollToEnd(driver, direction) {
//       const navShown = await driver.getNavButtonsShown();
//       // const transitionHandler = async e => {
//       //   if (e.propertyName === 'left') {
//       //     console.log('adler', 'Tabs.visual.tsx:117', e);
//       //     // await scrollToEnd(driver, direction);
//       //   }
//       // };
//
//       // (await driver.element()).addEventListener(
//       //   'transitionend',
//       //   transitionHandler,
//       // );
//
//       if (navShown === NavButtonOptions.both || navShown === direction) {
//         if (direction === NavButtonOptions.right) {
//           await driver.clickRightNavButton();
//         } else {
//           await driver.clickLeftNavButton();
//         }
//
//         await delay(600);
//
//         return scrollToEnd(driver, direction);
//       }
//     }
//
//     snap('right nav button', done =>
//       renderTest({ compact: true, props: { items: lotsItems } }, async () => {
//         done();
//       }),
//     );
//
//     snap('both nav buttons', done =>
//       renderTest(
//         { compact: true, props: { items: lotsItems } },
//         async (driver: TabsDriver) => {
//           await driver.clickRightNavButton();
//           done();
//         },
//       ),
//     );
//
//     snap('scroll to right end', done =>
//       renderTest(
//         { compact: true, props: { items: lotsItems } },
//         async (driver: TabsDriver) => {
//           await scrollToEnd(driver, NavButtonOptions.right);
//           done();
//         },
//       ),
//     );
//   });
// });

storiesOf('Tabs', module).add('scroll', () => <TabsVisual />, {
  eyes: { waitBeforeScreenshot: '[data-ready="true"]' },
});

import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { tabsDriverFactory, TabsDriver } from './Tabs.driver';
import { ALIGNMENT, SKIN, Tabs, VARIANT, TabsProps, NavButtonOptions } from '.';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';
import { delay } from '../../test/utils';

const items = [0, 1, 2, 4].map(i => ({ title: `Title ${i}` }));
const createDriver = uniTestkitFactoryCreator(tabsDriverFactory);
const dataHook = 'storybook-e2e-Tabs';

interface TabsVisualProps {
  tabsProps: TabsProps;
  mobile: boolean;
  onDone(TabsDriver): void;
  compact?: boolean;
}

class TabsVisual extends React.Component<TabsVisualProps> {
  static defaultProps = {
    tabsProps: {},
    mobile: false,
    onDone: () => {},
  };
  private driver: TabsDriver;

  componentDidMount(): void {
    this.driver = createDriver({ wrapper: document.body, dataHook });

    onStyleProcessorDone()
      .then(async () => {
        const { onDone } = this.props as any;
        try {
          onDone && (await onDone(this.driver));
        } catch (e) {}
      })
      .catch(() => {});
  }

  render() {
    const { tabsProps, mobile, compact } = this.props as any;
    const style = compact ? { margin: '10px', maxWidth: 200 } : undefined;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <div style={style}>
          <Tabs data-hook={dataHook} {...tabsProps} />
        </div>
      </TPAComponentsProvider>
    );
  }
}

visualize('Tabs', () => {
  const renderTest = (
    renderProps?: any,
    onDone?: (any?) => (TabsDriver) => void,
  ) => {
    const { props, mobile, compact } = renderProps;
    onDone = onDone || (d => () => d());
    return done => (
      <TabsVisual
        tabsProps={{
          items,
          activeTabIndex: 0,
          ...props,
        }}
        compact={compact}
        mobile={mobile}
        onDone={onDone(done)}
      />
    );
  };

  story('basic', () => {
    snap('default', renderTest());

    snap('mobile', renderTest({ mobile: true }));
  });

  story('Alignments', () => {
    Object.values(ALIGNMENT).map(alignment => {
      snap(alignment, renderTest({ props: { alignment } }));
    });
  });

  story('Variants', () => {
    Object.values(VARIANT).map(variant => {
      snap(variant, renderTest({ props: { variant } }));
    });
  });

  story('Skins', () => {
    Object.values(SKIN).map(skin => {
      snap(skin, renderTest({ props: { skin } }));
    });
  });

  const lotsItems = [
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
  ];

  story('Scroll', () => {
    async function scrollToEnd(driver, direction) {
      const navShown = await driver.getNavButtonsShown();

      if (navShown === NavButtonOptions.both || navShown === direction) {
        if (direction === NavButtonOptions.right) {
          await driver.clickRightNavButton();
        } else {
          await driver.clickLeftNavButton();
        }

        await delay(600);

        return scrollToEnd(driver, direction);
      }
    }

    snap(
      'left nav button',
      renderTest({ compact: true, props: { items: lotsItems } }, done => {
        return async () => {
          done();
        };
      }),
    );

    snap(
      'both nav buttons',
      renderTest({ compact: true, props: { items: lotsItems } }, done => {
        return async (driver: TabsDriver) => {
          await driver.clickRightNavButton();
          await delay(500);
          done();
        };
      }),
    );

    snap(
      'scroll to right end',
      renderTest({ compact: true, props: { items: lotsItems } }, done => {
        return async (driver: TabsDriver) => {
          await scrollToEnd(driver, NavButtonOptions.right);
          await delay(500);
          done();
        };
      }),
    );
  });
});

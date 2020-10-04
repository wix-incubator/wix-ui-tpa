import * as React from 'react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { tabsDriverFactory, TabsDriver } from './Tabs.driver';
import { Tabs, NavButtonOptions, TabsProps } from '.';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';
import { delay } from '../../test/utils';
import { storiesOf } from '@storybook/react';

const dataHook = 'storybook-e2e-Tabs';
const createDriver = uniTestkitFactoryCreator(tabsDriverFactory);
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

class TabsAsyncVisual extends React.Component<{
  tabsProps?: Partial<TabsProps>;
  onReady?(driver: TabsDriver): Promise<void>;
}> {
  private driver: TabsDriver;
  state = {
    isDone: false,
  };

  componentDidMount(): void {
    this.driver = createDriver({ wrapper: document.body, dataHook });

    onStyleProcessorDone()
      .then(async () => {
        const { onReady } = this.props as any;
        try {
          onReady && (await onReady(this.driver));
          this.setState({ isDone: true });
        } catch (e) {}
      })
      .catch(() => {});
  }

  render() {
    const { isDone } = this.state;
    const { tabsProps } = this.props as any;

    return (
      <div style={{ margin: '10px', maxWidth: 200 }} data-ready={isDone}>
        <Tabs data-hook={dataHook} items={lotsItems} {...tabsProps} />
      </div>
    );
  }
}

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

const eyesConfig = {
  eyes: {
    waitBeforeScreenshot: '[data-ready="true"]',
    runBefore: ({ rootEl }) => {
      const scrollElement = document.querySelector(
        `[data-hook="${dataHook}"] nav`,
      );
      const el = document.createElement('div');
      el.id = 'APPLITOOLS_ATTR';
      el.style.display = 'none';
      el.setAttribute('data-hscroll', `${scrollElement.scrollLeft}`);
      rootEl.appendChild(el);
    },
    scriptHooks: {
      beforeCaptureScreenshot: `
        const hscroll = document.querySelector('#APPLITOOLS_ATTR').dataset.hscroll
        const scrollElement = document.querySelector('[data-hook="${dataHook}"] nav')
        scrollElement.scrollLeft = hscroll
        `,
    },
  },
};

storiesOf('Tabs/Scroll', module)
  .add(
    'right nav button only',
    () => {
      return <TabsAsyncVisual />;
    },
    eyesConfig,
  )
  .add(
    'both nav buttons',
    () => {
      const onTestReady = async driver => {
        await driver.clickRightNavButton();
        await delay(500);
      };
      return <TabsAsyncVisual onReady={onTestReady} />;
    },
    eyesConfig,
  )
  .add(
    'scroll to right end',
    () => {
      const onTestReady = async driver => {
        await scrollToEnd(driver, NavButtonOptions.right);
        await delay(500);
      };
      return <TabsAsyncVisual onReady={onTestReady} />;
    },
    eyesConfig,
  );

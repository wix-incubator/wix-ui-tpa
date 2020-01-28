import * as React from 'react';
import { Tabs, SKIN, ALIGNMENT, VARIANT } from '..';
import * as TabsSource from '!raw-loader!../Tabs.tsx';
import { Examples } from './examples';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

const items = Array(20)
  .fill('')
  .map((item, index) => ({ title: `Title ${index + 1}` }));

const exampleItems = [
  { label: 'few items', value: items.slice(0, 4) },
  { label: 'many items', value: items },
];

function ExampleTabs(props) {
  const [rtl, setRtl] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (rootRef && rootRef.current) {
      const observer = new MutationObserver(mutationsList => {
        mutationsList.map(mutation => {
          if (mutation.attributeName === 'dir') {
            setRtl(
              (rootRef.current.parentNode as any).getAttribute('dir') === 'rtl',
            );
          }
        });
      });

      observer.observe(rootRef.current.parentNode, { attributes: true });

      return function cleanup() {
        observer.disconnect();
      };
    }
  }, [rootRef]);

  return (
    <div ref={rootRef}>
      <TPAComponentsProvider value={{ mobile: false, rtl }}>
        <Tabs {...props} />
      </TPAComponentsProvider>
    </div>
  );
}

export default {
  category: 'Components',
  storyName: 'Tabs',
  component: ExampleTabs,
  source: TabsSource,
  componentPath: '../Tabs.tsx',
  componentProps: setState => ({
    dataHook: 'storybook-Tabs',
    items: exampleItems[1].value,
    onTabClick: selectedTabIndex => {
      setState({ activeTabIndex: selectedTabIndex });
    },
    activeTabIndex: 0,
    skin: SKIN.fullUnderline,
    alignment: ALIGNMENT.center,
    variant: VARIANT.fit,
  }),
  exampleProps: {
    skin: Object.keys(SKIN).map(key => SKIN[key]),
    alignment: Object.keys(ALIGNMENT).map(key => ALIGNMENT[key]),
    variant: Object.keys(VARIANT).map(key => VARIANT[key]),
    items: exampleItems,
  },
  examples: <Examples />,
};

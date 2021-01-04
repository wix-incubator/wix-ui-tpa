import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ALIGNMENT, SKIN, Tabs, VARIANT, TabsProps } from '.';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

const items = [0, 1, 2, 4].map((i) => ({ title: `Title ${i}` }));

interface TabsVisualProps {
  tabsProps: TabsProps;
  mobile: boolean;
  compact?: boolean;
}

class TabsVisual extends React.Component<TabsVisualProps> {
  static defaultProps = {
    tabsProps: {},
    mobile: false,
  };

  render() {
    const { tabsProps, mobile, compact } = this.props as any;
    const style = compact ? { margin: '10px', maxWidth: 200 } : undefined;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <div style={style}>
          <Tabs {...tabsProps} />
        </div>
      </TPAComponentsProvider>
    );
  }
}

visualize('Tabs', () => {
  const renderTest = (renderProps?: any) => {
    const { props, mobile, compact } = renderProps || {};
    return (
      <TabsVisual
        tabsProps={{
          items,
          activeTabIndex: 0,
          ...props,
        }}
        compact={compact}
        mobile={mobile}
      />
    );
  };

  story('basic', () => {
    snap('default', renderTest());

    snap('mobile', renderTest({ mobile: true }));

    snap('with scroll arrows', renderTest({ compact: true }));
  });

  story('Alignments', () => {
    Object.values(ALIGNMENT).map((alignment) => {
      snap(alignment, renderTest({ props: { alignment } }));
    });
  });

  story('Variants', () => {
    Object.values(VARIANT).map((variant) => {
      snap(variant, renderTest({ props: { variant } }));
    });
  });

  story('Skins', () => {
    Object.values(SKIN).map((skin) => {
      snap(skin, renderTest({ props: { skin } }));
    });
  });

  story('Tab link', () => {
    const linkTabs = Array.from({ length: 3 }, (_, index) => ({
      title: `Link tab ${index + 1}`,
      href: `/some-href-${index}`,
    }));

    snap(
      'tab href',
      renderTest({
        props: { items: linkTabs },
      }),
    );
  });
});

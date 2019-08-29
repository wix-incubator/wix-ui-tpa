import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ALIGNMENT, SKIN, Tabs, TabsProps, VARIANT } from '.';

const kind = 'Tabs';
const testItems = [0, 1, 2, 4].map(i => ({ title: `Title ${i}` }));

interface TabsVisualProps extends TabsProps {
  mobile?: boolean;
}

class TabsVisual extends React.Component<TabsVisualProps> {
  static defaultProps = {
    items: testItems,
    mobile: false,
    activeTabIndex: 0,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualTestContainer>
          <Tabs data-hook={'storybook-e2e-Tabs'} {...this.props} />
        </VisualTestContainer>
      </TPAComponentsProvider>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'mobile',
        props: {
          mobile: true,
        },
      },
    ],
  },
  {
    describe: 'Alignments',
    its: Object.values(ALIGNMENT).map(alignment => ({
      it: alignment,
      props: {
        alignment,
      },
    })),
  },
  {
    describe: 'Variants',
    its: Object.values(VARIANT).map(variant => ({
      it: variant,
      props: {
        variant,
      },
    })),
  },
  {
    describe: 'Skins',
    its: Object.values(SKIN).map(skin => ({
      it: skin,
      props: {
        skin,
      },
    })),
  },
];

const generateTest = (props = {}) => <TabsVisual {...props} />;

const tempTests = {
  Basic: [
    {
      label: 'default',
      test: generateTest(),
    },
    {
      label: 'mobile',
      mobile: true,
      test: generateTest(),
    },
  ],
  Alignments: Object.values(ALIGNMENT).map(alignment => ({
    label: alignment,
    test: generateTest({
      alignment,
    }),
  })),
  Variants: Object.values(VARIANT).map(variant => ({
    label: variant,
    test: generateTest({
      variant,
    }),
  })),
  Skins: Object.values(SKIN).map(skin => ({
    label: skin,
    test: generateTest({
      skin,
    }),
  })),
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`${kind}/${describe}`, module).add(it, () => (
      <TabsVisual {...props} />
    ));
  });
});

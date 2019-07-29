import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { Theme, DotNavigation } from './DotNavigation';

class DotNavigationVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualContainerElement>
          <DotNavigation {...this.props} />
        </VisualContainerElement>
      </TPAComponentsProvider>
    );
  }
}

const shortVersionCases = new Array(5).fill(null).map((el, index) => ({
  it: `currentIndex = ${index}`,
  props: {
    currentIndex: index,
  },
}));

const longVersionCases = new Array(10).fill(null).map((el, index) => ({
  it: `length = 10, currentIndex = ${index}`,
  props: {
    length: 10,
    currentIndex: index,
  },
}));

const tests = [
  {
    describe: 'DotNavigation',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'length < 0',
        props: {
          length: -1,
        },
      },
      {
        it: 'length = 0',
        props: {
          length: 0,
        },
      },
      {
        it: 'length > 5',
        props: {
          length: 6,
        },
      },
      {
        it: 'light theme',
        props: {
          theme: Theme.Light,
        },
      },
      {
        it: 'with safety border',
        props: {
          showBorder: true,
        },
      },
      {
        it: 'light theme with safety border',
        props: {
          theme: Theme.Light,
          showBorder: true,
        },
      },
      {
        it: 'currentIndex < 0',
        props: {
          currentIndex: -1,
        },
      },
      ...shortVersionCases,
      {
        it: 'currentIndex > length - 1',
        props: {
          currentIndex: 5,
        },
      },
      {
        it: 'length = 10, currentIndex < 0',
        props: {
          length: 10,
          currentIndex: -1,
        },
      },
      ...longVersionCases,
      {
        it: 'length = 10, currentIndex > length - 1',
        props: {
          length: 10,
          currentIndex: 10,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`DotNavigation/${describe}`, module).add(it, () => (
      <DotNavigationVisual {...props} />
    ));
  });
});

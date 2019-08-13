import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Theme, DotNavigation } from './DotNavigation';

class DotNavigationVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <DotNavigation {...this.props} />
      </VisualTestContainer>
    );
  }
}

const SHORT_COMPONENT_LENGTH = 5;

const LONG_COMPONENT_LENGTH = 6;

const shortComponentCases = new Array(SHORT_COMPONENT_LENGTH)
  .fill(null)
  .map((el, index) => ({
    it: `currentIndex = ${index}`,
    props: {
      currentIndex: index,
    },
  }));

const longComponentCases = new Array(LONG_COMPONENT_LENGTH)
  .fill(null)
  .map((el, index) => ({
    it: `length = ${LONG_COMPONENT_LENGTH}, currentIndex = ${index}`,
    props: {
      length: LONG_COMPONENT_LENGTH,
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
        it: `length > ${SHORT_COMPONENT_LENGTH}`,
        props: {
          length: LONG_COMPONENT_LENGTH,
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
      ...shortComponentCases,
      {
        it: 'currentIndex > length - 1',
        props: {
          currentIndex: SHORT_COMPONENT_LENGTH,
        },
      },
      {
        it: `length = ${LONG_COMPONENT_LENGTH}, currentIndex < 0`,
        props: {
          length: LONG_COMPONENT_LENGTH,
          currentIndex: -1,
        },
      },
      ...longComponentCases,
      {
        it: `length = ${LONG_COMPONENT_LENGTH}, currentIndex > length - 1`,
        props: {
          length: LONG_COMPONENT_LENGTH,
          currentIndex: LONG_COMPONENT_LENGTH,
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

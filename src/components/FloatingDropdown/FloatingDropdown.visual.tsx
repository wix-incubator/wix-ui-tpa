import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { FloatingDropdown } from './';
import { getFloatingDropdownTestProps } from './test-props';

class FloatingDropdownVisual extends React.Component<any> {
  props = getFloatingDropdownTestProps();
  render() {
    return (
      <VisualTestContainer>
        <FloatingDropdown {...this.props} />
      </VisualTestContainer>
    );
  }
}

const extendedProps = { forceContentElementVisibility: true };
const preselectedProps = {};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: getFloatingDropdownTestProps(),
      },
      {
        it: 'expanded',
        props: getFloatingDropdownTestProps({ ...extendedProps }),
      },
    ],
  },
  {
    describe: 'preselected',
    its: [
      {
        it: 'default',
        props: getFloatingDropdownTestProps(),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FloatingDropdown/${describe}`, module).add(it, () => (
      <FloatingDropdownVisual {...props} />
    ));
  });
});

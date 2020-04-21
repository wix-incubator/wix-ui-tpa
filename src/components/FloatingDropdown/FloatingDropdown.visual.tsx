import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { FloatingDropdown } from './';
import { getFloatingDropdownTestProps } from './test-props';
import { FloatingDropdownProps } from './FloatingDropdown';

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

const extendedProps: Partial<FloatingDropdownProps> = {
  forceContentElementVisibility: true,
};
const preselectedProps: Partial<FloatingDropdownProps> = { value: '3' };

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
        props: getFloatingDropdownTestProps({ ...preselectedProps }),
      },
      {
        it: 'expanded',
        props: getFloatingDropdownTestProps({
          ...preselectedProps,
          ...extendedProps,
        }),
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'default',
        props: getFloatingDropdownTestProps({ disabled: true }),
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

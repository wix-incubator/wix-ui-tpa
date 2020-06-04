import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Picker } from './';

class PickerVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Picker
          value="Monday"
          onNext={() => {}}
          onPrev={() => {}}
          {...this.props}
        />
      </VisualTestContainer>
    );
  }
}

const defaultProps = {
  onNext: () => {},
  onPrev: () => {},
  value: 'October 2020',
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: { ...defaultProps },
      },
      {
        it: 'disable prev',
        props: {
          ...defaultProps,
          disablePrev: true,
        },
      },
      {
        it: 'disable next',
        props: {
          ...defaultProps,
          disableNext: true,
        },
      },
      {
        it: 'change the arrow size',
        props: {
          ...defaultProps,
          arrowsSize: '24px',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Picker/${describe}`, module).add(it, () => (
      <PickerVisual {...props} />
    ));
  });
});

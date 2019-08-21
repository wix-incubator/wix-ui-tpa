import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ToggleSwitch } from '.';

class ToggleSwitchVisual extends React.Component<any> {
  static defaultProps = {};

  render() {
    return (
      <VisualTestContainer>
        <ToggleSwitch {...this.props} />
      </VisualTestContainer>
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
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'checked',
        props: {
          checked: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ToggleSwitch/${describe}`, module).add(it, () => (
      <ToggleSwitchVisual {...props} />
    ));
  });
});

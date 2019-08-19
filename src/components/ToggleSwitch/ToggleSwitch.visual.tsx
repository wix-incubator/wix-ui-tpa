import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { ToggleSwitch } from '.';

class ToggleSwitchVisual extends React.Component<any> {
  static defaultProps = {};

  render() {
    return (
      <VisualContainerElement>
        <ToggleSwitch {...this.props} />
      </VisualContainerElement>
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

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { ColorPicker } from './';

class ColorPickerVisual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <ColorPicker {...this.props} />
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
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ColorPicker/${describe}`, module).add(it, () => (
      <ColorPickerVisual {...props} />
    ));
  });
});

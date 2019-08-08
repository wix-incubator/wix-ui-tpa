import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { Checkbox } from './';

class CheckboxVisual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <Checkbox {...this.props} />
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
    storiesOf(`Checkbox/${describe}`, module).add(it, () => (
      <CheckboxVisual {...props} />
    ));
  });
});

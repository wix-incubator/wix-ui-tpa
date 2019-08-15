import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { CheckboxGroup } from './';

class CheckboxGroupVisual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <CheckboxGroup {...this.props} />
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
    storiesOf(`CheckboxGroup/${describe}`, module).add(it, () => (
      <CheckboxGroupVisual {...props} />
    ));
  });
});

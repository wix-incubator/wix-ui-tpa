import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { {%ComponentName%} } from './';

class {%ComponentName%}Visual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <{%ComponentName%} {...this.props} />
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
    storiesOf(`{%ComponentName%}/${describe}`, module).add(it, () => (
      <{%ComponentName%}Visual {...props} />
    ));
  });
});

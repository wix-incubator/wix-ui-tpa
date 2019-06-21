import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconToggle } from './';

class IconToggleVisual extends React.Component<any> {
  render() {
    return <IconToggle icon={<div />} data-hook={'storybook-e2e-IconToggle'} />;
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
    storiesOf(`IconToggle/${describe}`, module).add(it, () => (
      <IconToggleVisual {...props} />
    ));
  });
});

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconToggle } from './';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

class IconToggleVisual extends React.Component<any> {
  render() {
    return (
      <IconToggle icon={<Heart />} data-hook={'storybook-e2e-IconToggle'} />
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
        it: 'checked',
        props: { checked: true },
      },
      {
        it: 'disabled',
        props: { disabled: true },
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

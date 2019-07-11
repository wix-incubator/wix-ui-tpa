import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconToggle, LabelPlacement } from './';
import { ReactComponent as Star } from '../../assets/icons/Star.svg';

class IconToggleVisual extends React.Component<any> {
  render() {
    return (
      <React.Fragment>
        <IconToggle icon={<Star />} {...this.props} />
        <IconToggle icon={<Star />} {...this.props} checked />
        <IconToggle icon={<Star />} {...this.props} disabled />
      </React.Fragment>
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
  {
    describe: 'label',
    its: [
      {
        it: 'default (placement END)',
        props: {
          label: 'Star',
        },
      },
      {
        it: 'placement START',
        props: {
          label: 'Star',
          labelPlacement: LabelPlacement.START,
        },
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

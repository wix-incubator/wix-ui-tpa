import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconButton } from './';
import { ReactComponent as ShareIcon } from '../../assets/icons/Share.svg';

class IconButtonVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    return (
      <IconButton
        icon={<ShareIcon />}
        data-hook={'storybook-e2e-IconButton'}
        {...this.props}
      />
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
    storiesOf(`IconButton/${describe}`, module).add(it, () => (
      <IconButtonVisual {...props} />
    ));
  });
});

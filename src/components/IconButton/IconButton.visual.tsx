import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconButton } from './';
import { ReactComponent as ShareIcon } from '../../assets/icons/Share.svg';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';

class IconButtonVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    return (
      <VisualContainerElement>
        <IconButton
          icon={<ShareIcon />}
          isFull
          data-hook={'storybook-e2e-IconButton'}
          {...this.props}
        />
        <IconButton
          icon={<ShareIcon />}
          data-hook={'storybook-e2e-IconButton'}
          isFull
          {...this.props}
          disabled
        />
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
    storiesOf(`IconButton/${describe}`, module).add(it, () => (
      <IconButtonVisual {...props} />
    ));
  });
});

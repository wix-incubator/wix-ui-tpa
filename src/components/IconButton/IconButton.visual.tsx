import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { IconButton } from './';

class IconButtonVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <IconButton data-hook={'storybook-e2e-IconButton'} {...this.props} />
      </TPAComponentsProvider>
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
        it: 'mobile',
        props: {
          mobile: true,
        },
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

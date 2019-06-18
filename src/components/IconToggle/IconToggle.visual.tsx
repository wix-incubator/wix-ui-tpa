import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { IconToggle } from './';

class IconToggleVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <IconToggle data-hook={'storybook-e2e-IconToggle'} {...this.props} />
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
    storiesOf(`IconToggle/${describe}`, module).add(it, () => (
      <IconToggleVisual {...props} />
    ));
  });
});

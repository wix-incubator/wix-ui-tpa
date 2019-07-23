import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { {%ComponentName%} } from './';

class {%ComponentName%}Visual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualContainerElement>
          <{%ComponentName%} {...this.props} />
        </VisualContainerElement>
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
    storiesOf(`{%ComponentName%}/${describe}`, module).add(it, () => (
      <{%ComponentName%}Visual {...props} />
    ));
  });
});

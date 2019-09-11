import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Calendar } from './';

class CalendarVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualTestContainer>
          <Calendar {...this.props} />
        </VisualTestContainer>
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
    storiesOf(`Calendar/${describe}`, module).add(it, () => (
      <CalendarVisual {...props} />
    ));
  });
});

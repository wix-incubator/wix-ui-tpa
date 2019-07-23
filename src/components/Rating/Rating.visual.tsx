import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { Rating, Mode, IconSize } from './';

class RatingVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualContainerElement>
          <Rating {...this.props} />
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
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'error',
        props: {
          error: true,
        },
      },
      {
        it: 'display mode',
        props: {
          value: 3,
          mode: Mode.Display,
        },
      },
      {
        it: 'Large Icons',
        props: {
          value: 3,
          mode: Mode.Display,
          iconSize: IconSize.Large,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Rating/${describe}`, module).add(it, () => (
      <RatingVisual {...props} />
    ));
  });
});

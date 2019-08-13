import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { ratingsTestkitFactory } from '../../testkit/protractor';
import { Ratings, Mode, Size } from '.';

const dataHook = 'ratings-datahook';

class RatingsVisual extends React.Component<any> {
  static defaultProps = {
    hook: null,
  };

  async _visualHook() {
    const { hook } = this.props;
    await hook();
  }

  render() {
    const ratingsProps = { ...this.props };
    delete ratingsProps.hook;
    return (
      <VisualContainerElement hook={this._visualHook}>
        <Ratings {...ratingsProps} data-hook={dataHook} />
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
        it: 'Large Size',
        props: {
          value: 3,
          mode: Mode.Display,
          size: Size.Large,
        },
      },
      {
        it: 'Input Options',
        props: {
          mode: Mode.Input,
          size: Size.Large,
          inputOptions: ['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla'],
        },
      },
      {
        it: 'Input Options with Initial value',
        props: {
          value: 3,
          mode: Mode.Input,
          size: Size.Large,
          inputOptions: ['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla'],
        },
      },
      {
        it: 'count info & rating info',
        props: {
          value: 3,
          mode: Mode.Display,
          countDisplay: '150',
          ratingDisplay: '3.0',
        },
      },
      {
        it: 'count info & rating info',
        props: {
          value: 3,
          mode: Mode.Input,
          hook: async () => {
            const driver = ratingsTestkitFactory({ dataHook });

            await waitForVisibilityOf(
              await driver.element(),
              'Cannot find Ratings',
            );

            await driver.hoverStar(3);
          },
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Ratings/${describe}`, module).add(it, () => (
      <RatingsVisual {...props} />
    ));
  });
});

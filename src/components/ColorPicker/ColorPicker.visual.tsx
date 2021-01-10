import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ColorPicker } from './';

class ColorPickerVisual extends React.Component<any> {
  render() {
    const { childProps, ...rest } = this.props;

    return (
      <VisualTestContainer>
        <ColorPicker {...rest} onChange={(e) => {}}>
          {childProps.map((props, index) => (
            <ColorPicker.Item key={index} {...props} />
          ))}
        </ColorPicker>
      </VisualTestContainer>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          childProps: [
            {
              value: 'red',
              'aria-label': 'red color',
            },
            {
              value: 'yellow',
              'aria-label': 'yellow color',
            },
            {
              value: 'green',
              'aria-label': 'green color',
              checked: true,
            },
          ],
        },
      },
      {
        it: 'default',
        props: {
          childProps: [
            {
              value: 'red',
              'aria-label': 'red color',
            },
            {
              value: 'yellow',
              'aria-label': 'yellow color',
              disabled: true,
            },
            {
              value: 'green',
              'aria-label': 'green color',
              checked: true,
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ColorPicker/${describe}`, module).add(it, () => (
      <ColorPickerVisual {...props} />
    ));
  });
});

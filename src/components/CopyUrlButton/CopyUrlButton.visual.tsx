import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CopyUrlButton } from './';
import { CopyUrlButtonProps } from './CopyUrlButton';

class CopyUrlButtonVisual extends React.Component<CopyUrlButtonProps> {
  render() {
    return (
      <VisualTestContainer>
        <CopyUrlButton {...this.props} />
      </VisualTestContainer>
    );
  }
}

const tests = [
  {
    describe: 'light',
    its: [
      {
        it: 'light',
        props: {
          url: 'wix.com',
          tooltipText: 'Copy link',
          successText: 'Link Copied',
          socialBarTheme: 'light' as 'light',
        },
      },
      {
        it: 'dark',
        props: {
          url: 'wix.com',
          tooltipText: 'Copy link',
          successText: 'Link Copied',
          socialBarTheme: 'dark' as 'dark',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`CopyUrlButton/${describe}`, module).add(it, () => (
      <CopyUrlButtonVisual {...props} />
    ));
  });
});

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { SocialBar } from './';
import { SocialBarProps, SocialBarTheme } from './SocialBar';

class SocialBarVisual extends React.Component<SocialBarProps> {
  render() {
    return (
      <VisualTestContainer>
        <SocialBar {...this.props} />
      </VisualTestContainer>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'light',
        props: { theme: 'light' as 'light' },
      },
      {
        it: 'dark',
        props: { theme: 'dark' as 'dark' },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SocialBar/${describe}`, module).add(it, () => (
      <SocialBarVisual {...props} />
    ));
  });
});

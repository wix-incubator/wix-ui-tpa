import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Toast } from './';
import { skinMessages } from './helpers';
import { TOAST_SKIN, ToastProps } from './types';

interface ToastVisualProps {
  mobile: boolean;
}

class ToastVisual extends React.Component<ToastVisualProps & ToastProps> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualTestContainer>
          <Toast {...this.props} />
        </VisualTestContainer>
      </TPAComponentsProvider>
    );
  }
}

function getTests(isMobile) {
  return Object.values(TOAST_SKIN).map((skin) => ({
    it: skin,
    props: {
      mobile: isMobile,
      skin,
      children: [skinMessages[skin]],
    },
  }));
}

const tests = [
  {
    describe: 'desktop',
    its: [...getTests(false)],
  },
  {
    describe: 'mobile',
    its: [...getTests(true)],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Toast/${describe}`, module).add(it, () => (
      <ToastVisual {...props} />
    ));
  });
});

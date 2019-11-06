import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import {Modal, ModalProps} from './';
import { bigContent } from './helpers';

class ModalVisual extends React.Component<ModalProps & {mobile: boolean}> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualTestContainer>
          <Modal {...this.props} />
        </VisualTestContainer>
      </TPAComponentsProvider>
    );
  }
}

function getTests(isMobile) {
  return [
    {
      it: 'Minimal height',
      props: {
        isOpen: true,
        onRequestClose: () => {},
        mobile: isMobile,
      },
    },
    {
      it: 'Maximum height',
      props: {
        isOpen: true,
        onRequestClose: () => {},
        children: bigContent,
        mobile: isMobile,
      },
    },
    {
      it: 'Without close button',
      props: {
        isOpen: true,
        onRequestClose: () => {},
        withCloseButton: false,
        mobile: isMobile,
      },
    },
    {
      it: 'Without background',
      props: {
        isOpen: true,
        onRequestClose: () => {},
        withBackground: false,
        mobile: isMobile,
      },
    },
  ];
}

const tests = [
  {
    describe: 'desktop',
    its: getTests(false),
  },
  {
    describe: 'mobile',
    its: getTests(true),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Modal/${describe}`, module).add(it, () => (
      <ModalVisual {...props} />
    ));
  });
});

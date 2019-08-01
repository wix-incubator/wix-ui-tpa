import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { Toast, TOAST_SKIN, ToastProps } from './';

class ToastVisual extends React.Component<ToastProps> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    // const { mobile } = this.props;

    // return (
    //   <TPAComponentsProvider value={{ mobile }}>
    //     <VisualContainerElement>
    //       <Toast {...this.props} />
    //     </VisualContainerElement>
    //   </TPAComponentsProvider>
    // );

    return (
      <VisualContainerElement>
        <Toast {...this.props} />
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
        props: {
          skin: TOAST_SKIN.success,
        },
      },
      // {
      //   it: 'mobile',
      //   props: {
      //     mobile: true,
      //     skin: TOAST_SKIN.success
      //   },
      // },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Toast/${describe}`, module).add(it, () => (
      <ToastVisual {...props} />
    ));
  });
});

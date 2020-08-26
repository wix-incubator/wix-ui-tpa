import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { Modal as CoreModal, ModalProps } from '../';
import { Button } from '../../Button';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const childrenExamples = [
  {
    label: 'Simple text',
    value: (
      <div
        style={{
          textAlign: 'center',
          height: '50vh',
          lineHeight: '50vh',
        }}
      >
        This is the content!
      </div>
    ),
  },
  {
    label: 'Image',
    value: (
      <div
        style={{
          background:
            'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_550,h_380,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg") no-repeat center center',
          margin: '20px',
          height: '400px',
          backgroundSize: 'cover',
        }}
      />
    ),
  },
];

class Modal extends React.Component<ModalProps> {
  state = {
    isModalOpen: false,
  };

  componentDidUpdate(prevProps: ModalProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.setState({
        isModalOpen: this.props.isOpen,
      });
    }
  }

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () =>
    this.setState({ isModalOpen: false }, () => {
      this.props.onClose();
    });

  render() {
    const { isOpen, onClose, ...rest } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <Button onClick={this.openModal}>Open Modal</Button>
        <CoreModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          rootElement={document.body}
          {...rest}
        />
      </>
    );
  }
}

export default {
  category: 'Components',
  storyName: 'Modal',
  component: Modal,
  componentPath: '../Modal.tsx',
  componentProps: setState => ({
    isOpen: false,
    children: childrenExamples[0].value,
    'data-hook': 'storybook-Modal',
    onClose: () => setState({ isOpen: false }),
  }),
  exampleProps: {
    closeOnClickOutside: false,
    children: childrenExamples,
    onClose: () => 'Closed',
  },
  hiddenProps: ['rootElement', 'focusTrap', 'closeButtonRef'],
  dataHook: 'storybook-Modal',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.base },
            { title: 'Mobile Example', source: examples.mobile },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};

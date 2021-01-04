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
import { allComponents } from '../../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../../stories/utils/SettingsApi';
import { Modal as CoreModal, ModalProps } from '../index';
import { Button } from '../../../Button';
import { StoryCategory } from '../../../../../stories/storyHierarchy';

const code = (config) =>
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

  componentDidUpdate(prevProps: ModalProps, prevState) {
    const { isModalOpen } = this.state;
    const { isOpen } = this.props;

    if (
      isModalOpen === prevState.isModalOpen &&
      (isOpen !== prevProps.isOpen || isOpen !== isModalOpen)
    ) {
      this.setState({
        isModalOpen: isOpen,
      });
    }
  }

  openModal = () => this.setState({ isModalOpen: true });

  render() {
    const { isOpen, ...rest } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <Button onClick={this.openModal}>Open Modal</Button>
        <CoreModal isOpen={isModalOpen} {...rest} />
      </>
    );
  }
}

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Modal',
  component: Modal,
  componentPath: '../Modal.tsx',
  componentProps: (setState) => ({
    isOpen: false,
    children: childrenExamples[0].value,
    'data-hook': 'storybook-Modal',
    onRequestClose: () => setState({ isOpen: false }),
    shouldCloseOnClickOutside: true,
    shouldCloseOnEsc: true,
  }),
  exampleProps: {
    children: childrenExamples,
  },
  hiddenProps: ['focusTrap'],
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
            { title: 'Mobile', source: examples.mobile },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};

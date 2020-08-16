import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Modal as CoreModal, ModalProps } from '..';
import { Button } from '../../Button';

const kind = 'Tests';

class Modal extends React.Component<ModalProps> {
  state = {
    isModalOpen: false,
    isShowModal: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShowModal: true,
      });
    }, 0);
  }

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
      if (this.props.onClose) {
        this.props.onClose();
      }
    });

  render() {
    const { isOpen, onClose, rootElement, ...rest } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div>
        <Button
          onClick={this.openModal}
          data-hook="e2e-storybook-modal-open-btn"
        >
          Open Modal
        </Button>
        {this.state.isShowModal ? (
          <CoreModal
            isOpen={isModalOpen}
            onClose={this.closeModal}
            rootElement={document.querySelector(
              `[data-hook="e2e-storybook-modal-wrapper"]`,
            )}
            {...rest}
          />
        ) : null}
      </div>
    );
  }
}

function renderTest() {
  return (
    <div data-hook="e2e-storybook-modal-wrapper">
      <Modal isOpen={false} rootElement={null} />
    </div>
  );
}

storiesOf(kind, module).add('Modal', renderTest);

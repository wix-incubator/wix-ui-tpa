import * as React from 'react';
import { Modal, ModalProps } from '../Modal';

export class ExampleModalApp extends React.Component<Partial<ModalProps>> {
  state = {
    isModalOpened: false,
  };

  openModal = () => {
    this.setState({ isModalOpened: true });
  };

  closeModal = () => {
    this.setState({ isModalOpened: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Trigger Modal</button>
        <Modal
          isOpen={this.state.isModalOpened}
          onRequestClose={this.closeModal}
          {...this.props}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

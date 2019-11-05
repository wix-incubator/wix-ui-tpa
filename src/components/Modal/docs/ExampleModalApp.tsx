import * as React from 'react';
import { Modal, ModalProps } from '../Modal';

export class ExampleModalApp extends React.Component<Partial<ModalProps>> {
  state = {
    isModalOpened: false,
  };

  handleOpenModal = () => {
    this.setState({ isModalOpened: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpened: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <Modal
          isOpen={this.state.isModalOpened}
          onRequestClose={this.handleCloseModal}
          {...this.props}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

import * as React from 'react';
import { Modal, ModalProps } from '../';
import styles from './ModalWiringExample.st.css';

export class ModalWiringExample extends React.Component<Partial<ModalProps>> {
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
          {...styles('root', {})}
        >
          Hey, I'm modal!
        </Modal>
      </div>
    );
  }
}

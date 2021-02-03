import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Modal } from '../index';
import { Button } from '../../../Button';
import { StoryCategory } from '../../../../../stories/storyHierarchy';

class ModalTestStory extends React.Component {
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

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;

    return (
      <div data-hook="e2e-storybook-modal-wrapper">
        <Button
          onClick={this.openModal}
          data-hook="e2e-storybook-modal-open-btn"
        >
          Open Modal
        </Button>
        {this.state.isShowModal ? (
          <Modal isOpen={isModalOpen} onRequestClose={this.closeModal}>
            <div
              className="modal-content-wrapper"
              style={{
                width: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -30%)',
                background: '#fff',
              }}
            >
              <button
                data-hook={'tpa-modal-close-btn'}
                onClick={this.closeModal}
              >
                X
              </button>
              <input
                className="e2e-storybook-modal-input-first"
                style={{ display: 'block', margin: '20px' }}
              />
              <input
                className="e2e-storybook-modal-input-second"
                style={{ display: 'block', margin: '20px' }}
              />
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

function renderTest() {
  return <ModalTestStory />;
}

storiesOf(StoryCategory.TESTS, module).add('Modal', renderTest);

import * as React from 'react';
import createFocusTrap from 'focus-trap';
import { st, classes } from './Modal.st.css';
import { ModalProps, ModalDefaultProps } from './types';
import { MODAL_DATA_HOOKS } from './dataHooks';

export class Modal extends React.Component<ModalProps> {
  static displayName = 'Modal';
  static defaultProps: ModalDefaultProps = {
    isOpen: false,
    closeOnClickOutside: true,
    focusTrap: true,
  };

  _contentRef = null;
  _focusTrapInstance = null;

  componentDidUpdate(prevProps: ModalProps) {
    const { isOpen, focusTrap } = this.props;

    if (isOpen !== prevProps.isOpen) {
      if (isOpen) {
        this._onModalOpen();
      } else {
        this._onModalClose();
      }
    }

    if (!focusTrap && prevProps.focusTrap) {
      this._destroyFocusTrap();
    }
  }

  _createFocusTrap() {
    const { closeOnClickOutside } = this.props;

    if (this._contentRef) {
      this._focusTrapInstance = createFocusTrap(this._contentRef, {
        escapeDeactivates: false,
        clickOutsideDeactivates: closeOnClickOutside,
        returnFocusOnDeactivate: true,
      });
    }
  }

  _destroyFocusTrap() {
    if (this._focusTrapInstance) {
      this._focusTrapInstance.deactivate();
    }
    this._focusTrapInstance = null;
  }

  _contentRefCallback = ref => {
    const { focusTrap, isOpen } = this.props;
    this._contentRef = ref;

    // initial the focus trap when the modal is opened and only after the ref exists
    if (focusTrap && isOpen && this._contentRef) {
      this._createFocusTrap();
    }
  };

  _onModalOpen() {
    if (this._focusTrapInstance) {
      try {
        this._focusTrapInstance.activate();
      } catch (err) {}
    }
  }

  _onModalClose() {
    if (this._focusTrapInstance) {
      this._focusTrapInstance.deactivate();
      this._focusTrapInstance = null;
    }
  }

  _onClose = () => {
    const { onRequestClose } = this.props;
    onRequestClose && onRequestClose();
  };

  _renderModal() {
    const { closeOnClickOutside, children } = this.props;

    return (
      <>
        <div
          className={classes.overlay}
          data-hook={MODAL_DATA_HOOKS.OVERLAY}
          onClick={closeOnClickOutside ? this._onClose : undefined}
        />
        <section
          className={classes.modal}
          data-hook={MODAL_DATA_HOOKS.CONTENT}
          ref={this._contentRefCallback}
        >
          {children}
        </section>
      </>
    );
  }

  render() {
    const { className, isOpen } = this.props;

    return (
      <div
        data-hook={this.props['data-hook']}
        className={st(classes.root, { isOpen }, className)}
      >
        {isOpen ? this._renderModal() : null}
      </div>
    );
  }
}

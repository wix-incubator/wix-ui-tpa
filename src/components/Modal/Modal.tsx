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
    console.log('componentDidUpdate');

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
    console.log('_createFocusTrap, this._contentRef = ', this._contentRef);
    const { closeOnClickOutside } = this.props;

    if (this._contentRef) {
      console.log('_createFocusTrap, in if');
      this._focusTrapInstance = createFocusTrap(this._contentRef, {
        onActivate: () => {
          console.log('onActivate!');
        },
        onDeactivate: () => {
          console.log('onDeactivate!');
        },
        escapeDeactivates: false,
        clickOutsideDeactivates: closeOnClickOutside,
        returnFocusOnDeactivate: true,
      });
      console.log('_createFocusTrap, end of if');
    }
  }

  _destroyFocusTrap() {
    console.log(
      '_destroyFocusTrap, this._focusTrapInstance = ',
      this._focusTrapInstance,
    );
    if (this._focusTrapInstance) {
      this._focusTrapInstance.deactivate();
    }
    this._focusTrapInstance = undefined;
  }

  _contentRefCallback = ref => {
    console.log('_contentRefCallback, ref = ', ref);
    const { focusTrap, isOpen } = this.props;
    this._contentRef = ref;

    // initial the focus trap when the modal is opened and only after the ref exists
    if (focusTrap && isOpen && this._contentRef) {
      this._createFocusTrap();
    }
  };

  _onModalOpen() {
    console.log('_onModalOpen');
    if (this._focusTrapInstance) {
      console.log('in if, this._focusTrapInstance = ', this._focusTrapInstance);
      try {
        this._focusTrapInstance.activate();
      } catch (err) {}
    }
  }

  _onModalClose() {
    console.log('_onModalClose');
    if (this._focusTrapInstance) {
      this._focusTrapInstance.deactivate();
    }
  }

  _onClose = () => {
    const { onRequestClose } = this.props;
    console.log('_onClose');
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

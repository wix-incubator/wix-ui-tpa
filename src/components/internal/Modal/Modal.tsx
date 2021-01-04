import * as React from 'react';
import { st, classes } from './Modal.st.css';
import { ModalProps, ModalDefaultProps } from './types';
import { MODAL_DATA_HOOKS } from './dataHooks';
import { KEY_CODES } from '../../../common/keyCodes';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../../TPAComponentsConfig';

const createFocusTrap = require('focus-trap');

export class Modal extends React.Component<ModalProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Modal';
  static defaultProps: ModalDefaultProps = {
    isOpen: false,
    shouldCloseOnClickOutside: true,
    shouldCloseOnEsc: true,
    focusTrap: true,
  };

  _contentRef = null;
  _focusTrapInstance = null;

  componentDidMount() {
    this._addEscEventListener();
  }

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

  componentWillUnmount() {
    this._removeEscEventListener();
  }

  _createFocusTrap() {
    const { shouldCloseOnClickOutside } = this.props;

    if (this._contentRef) {
      this._focusTrapInstance = createFocusTrap(this._contentRef, {
        escapeDeactivates: false,
        clickOutsideDeactivates: shouldCloseOnClickOutside,
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

  _contentRefCallback = (ref) => {
    const { focusTrap, isOpen } = this.props;
    this._contentRef = ref;

    // initial the focus trap when the modal is opened and only after the ref exists
    if (focusTrap && isOpen && this._contentRef) {
      this._createFocusTrap();
    }
  };

  _isMobile() {
    const { mobile: isMobile } = this.context;
    return isMobile;
  }

  _addEscEventListener() {
    const { isOpen } = this.props;

    if (!this._isMobile() && isOpen) {
      document.addEventListener('keyup', this._onEscKeyup);
    }
  }

  _removeEscEventListener() {
    if (!this._isMobile()) {
      document.removeEventListener('keyup', this._onEscKeyup);
    }
  }

  _onEscKeyup = (e) => {
    if (e.keyCode === KEY_CODES.Esc) {
      this._onClose();
    }
  };

  _onModalOpen() {
    this._addEscEventListener();

    if (this._focusTrapInstance) {
      try {
        this._focusTrapInstance.activate();
      } catch (err) {}
    }
  }

  _onModalClose() {
    this._removeEscEventListener();

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
    const { shouldCloseOnClickOutside, children } = this.props;

    return (
      <>
        <div
          className={classes.overlay}
          data-hook={MODAL_DATA_HOOKS.OVERLAY}
          onClick={shouldCloseOnClickOutside ? this._onClose : undefined}
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
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            data-hook={this.props['data-hook']}
            className={st(classes.root, { isOpen }, className)}
          >
            {isOpen ? this._renderModal() : null}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

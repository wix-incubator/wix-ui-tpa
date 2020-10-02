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

  _contentRef = React.createRef<HTMLDivElement>();
  _focusTrapInstance = null;

  componentDidMount() {
    const { focusTrap } = this.props;

    if (focusTrap) {
      this._createFocusTrap();
    }
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

    if (focusTrap && !prevProps.focusTrap) {
      this._createFocusTrap();
    } else if (!focusTrap && prevProps.focusTrap) {
      this._destroyFocusTrap();
    }
  }

  _createFocusTrap() {
    if (this._contentRef.current) {
      this._focusTrapInstance = createFocusTrap(this._contentRef.current, {
        escapeDeactivates: false,
        clickOutsideDeactivates: false,
        returnFocusOnDeactivate: false,
      });
    }
  }

  _destroyFocusTrap() {
    if (this._focusTrapInstance) {
      this._focusTrapInstance.deactivate();
    }
    this._focusTrapInstance = undefined;
  }

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
    }
  }

  _onClose = () => {
    const { onRequestClose } = this.props;
    onRequestClose && onRequestClose();
  };

  _renderModal() {
    const { contentClassName, closeOnClickOutside, children } = this.props;

    return (
      <>
        <div
          className={classes.overlay}
          data-hook={MODAL_DATA_HOOKS.OVERLAY}
          onClick={closeOnClickOutside ? this._onClose : undefined}
        />
        <section className={classes.modal} data-hook={MODAL_DATA_HOOKS.STAGE}>
          <div
            className={`${classes.content} ${contentClassName || ''}`}
            data-hook={MODAL_DATA_HOOKS.CONTENT}
            ref={this._contentRef}
          >
            {children}
          </div>
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

import * as React from 'react';
import createFocusTrap from 'focus-trap';
import { st, classes } from './Modal.st.css';
import { ModalProps, ModalDefaultProps } from './types';

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
    const {
      isOpen,
      contentClassName,
      closeOnClickOutside,
      children,
    } = this.props;

    return (
      <>
        {isOpen ? (
          <div
            className={classes.overlay}
            data-hook="tpa-modal-overlay"
            onClick={closeOnClickOutside ? this._onClose : undefined}
          />
        ) : null}
        <section
          className={classes.modal}
          data-hook="tpa-modal-box"
          data-is-open={isOpen}
        >
          <div
            className={`${classes.content} ${contentClassName || ''}`}
            data-hook="tpa-modal-content"
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

    return isOpen ? (
      <div
        data-hook={this.props['data-hook']}
        className={st(classes.root, { isOpen }, className)}
      >
        {this._renderModal()}
      </div>
    ) : null;
  }
}

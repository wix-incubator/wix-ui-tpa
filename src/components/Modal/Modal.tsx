import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createFocusTrap from 'focus-trap';
import { st, classes } from './Modal.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ModalProps, ModalDefaultProps, ModalState } from './types';
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg';

export class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';
  static defaultProps: ModalDefaultProps = {
    isOpen: false,
    closeOnClickOutside: true,
    focusTrap: true,
  };

  el = null;
  focusTrapInstance = null;
  _closingTimeout = null;

  constructor(props: ModalProps) {
    super(props);

    this.state = {
      isCloseInProgress: false,
    };
  }

  componentDidMount() {
    this.el = document.createElement('div');
    this.props.rootElement.appendChild(this.el);

    if (this.props.focusTrap) {
      this.focusTrapInstance = createFocusTrap(this.el, {
        escapeDeactivates: false,
        clickOutsideDeactivates: false,
        returnFocusOnDeactivate: false,
      });
    }
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    if (this.props.isOpen !== prevProps.isOpen && this.focusTrapInstance) {
      if (this.props.isOpen) {
        try {
          this.focusTrapInstance.activate();
        } catch (err) {
          console.error(err);
        }
      } else {
        this.focusTrapInstance.deactivate();
      }
    }

    if (!prevState.isCloseInProgress && this.state.isCloseInProgress) {
      clearTimeout(this._closingTimeout);
      this._closingTimeout = setTimeout(() => {
        this.setState({ isCloseInProgress: false });
      }, 200);
    } else if (
      prevState.isCloseInProgress &&
      !this.state.isCloseInProgress &&
      this.props.onClose
    ) {
      this.props.onClose();
    }
  }

  _onClose = () => {
    this.setState({
      isCloseInProgress: true,
    });
  };

  render() {
    return (
      <TPAComponentsConsumer>
        {({ mobile, rtl }) => {
          return (
            <div
              data-mobile={mobile}
              data-rtl={rtl}
              data-hook={this.props['data-hook']}
            >
              {this.el &&
                ReactDOM.createPortal(this._renderModal(mobile, rtl), this.el)}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }

  _renderModal(mobile, rtl) {
    const { isOpen, className, closeButtonRef } = this.props;
    const { isCloseInProgress } = this.state;

    return (
      <div className={st(classes.root, { mobile, rtl }, className)}>
        {isOpen ? (
          <div
            className={classes.overlay}
            data-hook="tpa-modal-overlay"
            onClick={() => {
              if (this.props.closeOnClickOutside) {
                this._onClose();
              }
            }}
          />
        ) : null}
        <section
          className={`${classes.modal} ${
            isOpen && !isCloseInProgress ? classes.animated : ''
          } ${isCloseInProgress ? classes.closing : ''}`}
          data-hook="tpa-modal-box"
          data-is-open={isOpen}
        >
          <button
            className={classes.close}
            onClick={this._onClose}
            ref={closeButtonRef}
            data-hook="tpa-modal-close-btn"
          >
            <CloseIcon />
          </button>
          <div
            className={`${classes.content} ${this.props.contentClassName ||
              ''}`}
            data-hook="tpa-modal-content"
          >
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.rootElement.removeChild(this.el);
    clearTimeout(this._closingTimeout);
  }
}

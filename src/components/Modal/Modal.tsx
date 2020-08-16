import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createFocusTrap from 'focus-trap';
import { st, classes } from './Modal.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ModalProps, ModalDefaultProps, ModalState } from './types';
import { CloseIcon } from './Close';

export class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';
  static defaultProps: ModalDefaultProps = {
    isOpen: false,
    closeOnClickOutside: true,
    minHeight: '150px',
    maxHeight: '620px',
    minWidth: 'auto',
    maxWidth: '580px',
    focusTrap: true,
  };

  el = null;
  focusTrapInstance = null;

  constructor(props: ModalProps) {
    super(props);

    this.el = document.createElement('div');
    this.state = {
      isCloseInProgress: false,
    };
  }

  componentDidMount() {
    this.props.rootElement.appendChild(this.el);
    if (this.props.focusTrap) {
      this.focusTrapInstance = createFocusTrap(this.el, {
        escapeDeactivates: false,
        clickOutsideDeactivates: false,
        returnFocusOnDeactivate: false,
      });
    }
  }

  componentDidUpdate(prevProps: ModalProps) {
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
  }

  onClose = () => {
    this.setState(
      {
        isCloseInProgress: true,
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              isCloseInProgress: false,
            },
            () => {
              if (this.props.onClose) {
                this.props.onClose();
              }
            },
          );
        }, 200);
      },
    );
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
              {ReactDOM.createPortal(this.renderModal(mobile, rtl), this.el)}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }

  renderModal(mobile, rtl) {
    const {
      isOpen,
      className,
      minHeight,
      maxHeight,
      minWidth,
      maxWidth,
      closeButtonRef,
    } = this.props;
    const { isCloseInProgress } = this.state;

    return (
      <div className={st(classes.root, { mobile, rtl }, className)}>
        {isOpen ? (
          <div
            className={classes.overlay}
            data-hook="tpa-modal-overlay"
            onClick={() => {
              if (this.props.closeOnClickOutside) {
                this.onClose();
              }
            }}
          />
        ) : null}
        <section
          className={`${classes.modal} ${
            isOpen && !isCloseInProgress ? classes.animated : ''
          } ${isCloseInProgress ? classes.closing : ''}`}
          style={{
            minHeight: !mobile ? minHeight : 'auto',
            maxHeight: !mobile ? maxHeight : 'auto',
            minWidth,
            maxWidth,
          }}
          data-hook="tpa-modal-box"
          data-is-open={isOpen}
        >
          <button
            className={classes.close}
            onClick={this.onClose}
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
    this.props.rootElement && this.props.rootElement.removeChild(this.el);
  }
}

import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import ReactModal from 'react-modal';

import styles from './Modal.st.css';
import { IconButton } from '../IconButton';
import { Close } from '../../assets/icons';

export interface ModalProps {
  /**
   * Describing if the modal should be shown or not.
   */
  isOpen: boolean;

  /**
   * Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC)
   * Note: It is not called if isOpen is changed by other means.
   */
  onRequestClose(): void;

  /**
   * Describing if the modal should be shown in full screen or not.
   */
  inFullScreen?: boolean;

  /**
   * Describing if the modal should be shown with close button or not.
   */
  withCloseButton?: boolean;

  /**
   * Describing if the modal should be shown with dark background overlay or not.
   */
  withBackground?: boolean;
}

interface DefaultProps {
  inFullScreen: boolean;
  withCloseButton: boolean;
  withBackground: boolean;
}

interface State {}

/** The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else. */
export class Modal extends React.Component<ModalProps, State> {
  static displayName = 'Modal';
  static defaultProps: DefaultProps = {
    inFullScreen: false,
    withCloseButton: true,
    withBackground: true,
  };
  private readonly ref = React.createRef<HTMLDivElement>();

  render() {
    const {
      isOpen,
      onRequestClose,
      withBackground,
      withCloseButton,
      inFullScreen,
      children,
      ...rest
    } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...styles('root', { mobile, withBackground, inFullScreen }, rest)}
            ref={this.ref}
          >
            {this.ref.current ? (
              <ReactModal
                ariaHideApp={false}
                parentSelector={() => {
                  return this.ref.current;
                }}
                data-mobile={mobile}
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName={styles.overlay}
                className={styles.contentWrapper}
              >
                {withCloseButton ? (
                  <div className={styles.closeButtonWrapper}>
                    <IconButton
                      icon={<Close />}
                      className={styles.closeButton}
                      onClick={onRequestClose}
                    />
                  </div>
                ) : null}
                <div className={styles.content}>{children}</div>
              </ReactModal>
            ) : null}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

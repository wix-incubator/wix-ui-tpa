import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import styles from './Modal.st.css';
import { IconButton } from '../IconButton';
import { Close } from '../../assets/icons';
import { DATA_HOOKS } from './constants';

export interface ModalProps {
  /**
   * Describing if the modal should be shown or not.
   */
  isOpen: boolean;

  /**
   * Function that will be run when the modal is requested to be closed (by clicking on overlay)
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
  aria?: {
    labeledBy?: string;
  };
}

interface DefaultProps {
  inFullScreen: boolean;
  withCloseButton: boolean;
  withBackground: boolean;
  aria: {
    labeledBy: string;
  };
}

interface State {}

/** The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else. */
export class Modal extends React.Component<ModalProps, State> {
  static displayName = 'Modal';
  static defaultProps: DefaultProps = {
    inFullScreen: false,
    withCloseButton: true,
    withBackground: true,
    aria: {
      labeledBy: 'dialog-label',
    },
  };

  handleContentClick = event => event.stopPropagation();

  render() {
    const {
      isOpen,
      onRequestClose,
      withBackground,
      withCloseButton,
      inFullScreen,
      children,
      aria,
      ...rest
    } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...styles('root', { mobile, withBackground, inFullScreen }, rest)}
            data-mobile={mobile}
            onClick={onRequestClose}
          >
            <div tabIndex={0}></div>
            <div
              className={styles.contentWrapper}
              onClick={this.handleContentClick}
              role="dialog"
              aria-modal="true"
            >
              {withCloseButton ? (
                <div className={styles.closeButtonWrapper}>
                  <IconButton
                    aria-label="Close the dialog window"
                    data-hook={DATA_HOOKS.closeIconButton}
                    icon={<Close />}
                    className={styles.closeButton}
                    onClick={onRequestClose}
                  />
                </div>
              ) : null}
              <div className={styles.content}>{children}</div>
            </div>
            <div tabIndex={0}></div>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

import * as React from 'react';
import { st, classes } from './Dialog.st.css';
import { DATA_HOOKS } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import { Modal } from '../Modal';
import { IconButton } from '../IconButton';
import { Close as CloseIcon } from '../../assets/icons';
import { TPAComponentProps } from '../../types';

export interface DialogProps extends TPAComponentProps {
  /** Whether the modal is opened */
  isOpen?: boolean;
  /** Whether to use our focus trap or to manage the focus manually. */
  manualFocus?: boolean;
  /** Adds a ref for the close button. This prop might be used when you choose the manual focus. */
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
  /** Callback for when the close button is clicked */
  onClose?(): void;
  /** Children to render inside dialog */
  children?: React.ReactNode;
  /** A class name that will be added to the content wrapper */
  contentClassName?: string;
  /** Defines a string value that labels the dialog element. Optional. */
  'aria-label'?: string;
  /** Identifies the element that labels the dialog element. Optional. */
  'aria-labelledby'?: string;
  /** Gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog. Optional. */
  'aria-describedby'?: string;
  /** Defines a string value that labels the close button element. Optional. */
  closeButtonAriaLabel?: string;
  /** Identifies the element that labels the close button element. Optional. */
  closeButtonAriaLabelledby?: string;
}

interface DefaultProps {
  isOpen: boolean;
  manualFocus: boolean;
}

/** Dialog */
export class Dialog extends React.Component<DialogProps> {
  static displayName = 'Dialog';
  static defaultProps: DefaultProps = {
    isOpen: false,
    manualFocus: false,
  };

  render() {
    const {
      className,
      isOpen,
      manualFocus,
      closeButtonRef,
      onClose,
      children,
      contentClassName,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ['aria-describedby']: ariaDescribedBy,
      closeButtonAriaLabel,
      closeButtonAriaLabelledby,
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile, rtl }) => (
          <div
            className={st(classes.root, { mobile, rtl }, className)}
            data-hook={this.props['data-hook']}
            data-mobile={mobile}
          >
            <Modal
              isOpen={isOpen}
              focusTrap={!manualFocus}
              onRequestClose={onClose}
            >
              <div
                className={`${classes.contentWrapper} ${contentClassName || ''}`}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
                aria-describedby={ariaDescribedBy}
              >
                <div className={classes.closeButtonWrapper}>
                  <IconButton
                    className={classes.closeIconButton}
                    data-hook={DATA_HOOKS.CLOSE_BTN}
                    aria-label={closeButtonAriaLabel}
                    aria-labelledby={closeButtonAriaLabelledby}
                    innerRef={closeButtonRef}
                    onClick={onClose}
                    icon={<CloseIcon />}
                  />
                </div>
                <div className={classes.dialogContent}>{children}</div>
              </div>
            </Modal>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

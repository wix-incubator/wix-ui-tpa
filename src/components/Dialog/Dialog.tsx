import * as React from 'react';
import { st, classes } from './Dialog.st.css';
import { DATA_HOOKS } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import { Modal } from '../Modal';
import { IconButton } from '../IconButton';
import { Close as CloseIcon } from '../../assets/icons';

export interface DialogProps {
  isOpen?: boolean;
  manualFocus?: boolean;
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
  onClose?(): void;
  children?: React.ReactNode;
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
      isOpen,
      manualFocus,
      closeButtonRef,
      onClose,
      children,
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div className={st(classes.root, { mobile })} data-mobile={mobile}>
            <Modal
              isOpen={isOpen}
              focusTrap={!manualFocus}
              closeOnClickOutside={false}
            >
              <div className={classes.closeButtonWrapper}>
                <IconButton
                    className={classes.closeIconButton}
                    data-hook={DATA_HOOKS.CLOSE_BTN}
                    innerRef={closeButtonRef}
                    onClick={onClose}
                    icon={<CloseIcon />}
                />
              </div>
              <div className={classes.dialogContent}>{children}</div>
            </Modal>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

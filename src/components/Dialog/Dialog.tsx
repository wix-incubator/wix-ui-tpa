import * as React from 'react';
import { st, classes } from './Dialog.st.css';
import { DATA_HOOKS } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import { Button } from '../Button';
import { Modal } from '../Modal';

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
              <Button
                data-hook={DATA_HOOKS.CLOSE_BTN}
                ref={closeButtonRef}
                onClick={onClose}
              >
                X
              </Button>
              <div className={classes.dialogContent}>{children}</div>
            </Modal>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

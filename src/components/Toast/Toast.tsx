import * as React from 'react';
import styles from './Toast.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { IconButton } from '../IconButton';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { CloseIconButton } from './CloseIconButton/CloseIconButton';

export enum TOAST_SKIN {
  status = 'status',
  success = 'success',
  error = 'error',
}

export interface ToastProps {
  /** Define the styles for toast */
  skin: TOAST_SKIN;
  shouldShowCloseButton?: boolean;
  /** Callback function, will be called when click on close button */
  onClose?(): void;
}

export interface DefaultProps {
  shouldShowCloseButton: boolean;
}

interface State {}

export class Toast extends React.Component<ToastProps, State> {
  static displayName = 'Toast';

  static defaultProps: DefaultProps = {
    shouldShowCloseButton: false,
  };

  handleOnCloseClick = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { skin, shouldShowCloseButton, children, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile, rtl }) => {
          console.log(`mobile = ${mobile}, rtl = ${rtl}`);
          return (
            <div
              {...styles('root', { mobile, rtl, skin }, rest)}
              data-skin={skin}
            >
              <span className={styles.gapBeforeMessage}></span>
              <span className={styles.message} data-hook="message">
                {children}
              </span>
              {shouldShowCloseButton ? (
                <div
                  data-hook="closeButton"
                  className={styles.closeButton}
                  onClick={this.handleOnCloseClick}
                >
                  <CloseIconButton />
                </div>
              ) : (
                <span className={styles.gapAfterMessage}></span>
              )}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}

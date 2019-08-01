import * as React from 'react';
import styles from './Toast.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export enum TOAST_SKIN {
  status = 'status',
  success = 'success',
  error = 'error',
}

export interface ToastProps {
  skin: TOAST_SKIN;
  shouldShowCloseButton?: boolean;
  onClose?(): void;
}

export interface DefaultProps {
  shouldShowCloseButton: boolean;
}

interface State {}

/** Toasts are used to display important notifications or errors for the entire page. */
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
            <div {...styles('root', { mobile, rtl, skin }, rest)}>
              <span className={styles.message}>{children}</span>
              {shouldShowCloseButton && (
                <div
                  className={styles.closeButton}
                  onClick={this.handleOnCloseClick}
                >
                  {/* TODO: change to ICON button component*/}
                  <span>x</span>
                </div>
              )}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}

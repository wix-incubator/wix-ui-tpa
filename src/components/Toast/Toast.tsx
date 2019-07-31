import * as React from 'react';
import styles from './Toast.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { AvatarGroupSize } from '../AvatarGroup';

export enum TOAST_SKIN {
  status = 'status',
  success = 'success',
  error = 'error',
}

export interface ToastProps {
  skin: TOAST_SKIN;
  shouldShowCloseButton?: boolean;
  onClose?(): any;
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

  render() {
    const { skin, shouldShowCloseButton, children, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', { mobile, skin }, rest)}>
            <span className={styles.message}>{children}</span>
            {shouldShowCloseButton && (
              <div className={styles.closeButton}>
                {/* TODO: change to ICON button component*/}
                <span>x</span>
              </div>
            )}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

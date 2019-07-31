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
  onClose?(): any;
}

interface DefaultProps {}

interface State {}

/** Toasts are used to display important notifications or errors for the entire page. */
export class Toast extends React.Component<ToastProps, State> {
  static displayName = 'Toast';
  render() {
    const { skin, children, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', { mobile, skin }, rest)}>
            <span className={styles.message}>{children}</span>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

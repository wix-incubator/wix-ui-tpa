import * as React from 'react';
import { st, classes } from './Toast.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { CloseIconButton } from './CloseIconButton';
import { DefaultProps, ToastProps } from './types';

export class Toast extends React.Component<ToastProps> {
  static displayName = 'Toast';

  static defaultProps: DefaultProps = {
    shouldShowCloseButton: false,
    isShown: true,
  };

  handleOnCloseClick = (event: MouseEvent) => {
    const { onClose } = this.props;
    onClose && onClose(event);
  };

  render() {
    const {
      skin,
      shouldShowCloseButton,
      children,
      shouldAnimate,
      isShown,
      placement,
      className,
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile, rtl }) => (
          <div
            className={st(
              classes.root,
              { mobile, skin, shouldAnimate, isShown, placement, rtl },
              className,
            )}
            role="alert"
            data-is-shown={isShown}
            data-skin={skin}
            data-mobile={mobile}
            data-hook={this.props['data-hook']}
          >
            <span role="presentation" className={classes.gapBeforeMessage} />
            <span className={classes.message} data-hook="message">
              {children}
            </span>
            {shouldShowCloseButton ? (
              <div className={classes.closeButtonWrapper}>
                <CloseIconButton
                  onClick={this.handleOnCloseClick}
                  data-hook="closeButton"
                />
              </div>
            ) : (
              <span role="presentation" className={classes.gapAfterMessage} />
            )}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

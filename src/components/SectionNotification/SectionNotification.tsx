import * as React from 'react';
import { TPAComponentProps } from '../../types';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { SECTION_NOTIFICATION_DATA_HOOKS } from './dataHooks';
import styles from './SectionNotification.st.css';
import {
  NOTIFICATION_TYPE,
  SectionNotificationDefaultProps,
  SectionNotificationProps,
} from './types';

/** Section notification displays an important, succinct message, and provides actions for users to address and can not be dismissed.  */
export class SectionNotification extends React.Component<
  SectionNotificationProps & TPAComponentProps
> {
  static displayName = 'SectionNotification';
  static defaultProps: SectionNotificationDefaultProps = {
    type: NOTIFICATION_TYPE.default,
    'data-hook': SECTION_NOTIFICATION_DATA_HOOKS.root,
  };

  render() {
    const { icon, text, controls, type } = this.props;
    const isError = type === NOTIFICATION_TYPE.error;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...styles('root', {
              error: isError,
            })}
            data-error={isError}
            data-mobile={mobile}
            data-hook={this.props['data-hook']}
            aria-live="assertive"
          >
            <div className={styles.main}>
              <div className={styles.textWrapper}>
                <div
                  className={styles.icon}
                  data-hook={SECTION_NOTIFICATION_DATA_HOOKS.iconWrapper}
                >
                  {icon}
                </div>
                <div
                  className={styles.text}
                  data-hook={SECTION_NOTIFICATION_DATA_HOOKS.textWrapper}
                >
                  {text}
                </div>
              </div>
              {!isError && controls ? (
                <div
                  className={styles.controls}
                  data-hook={SECTION_NOTIFICATION_DATA_HOOKS.controlsWrapper}
                >
                  {controls}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

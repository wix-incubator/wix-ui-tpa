import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { POPOVER_DATA_HOOKS, POPOVER_DATA_KEYS } from './dataHooks';
import styles from './Popover.st.css';

export interface PopoverProps {
  title?: string;
  onClose(): void;
  withArrow?: boolean;
  rightArrow?: boolean;
  arrowTop?: string;
  withShadow?: boolean;
}

interface DefaultProps {
  title: string;
  'data-hook': string;
  withArrow: boolean;
  rightArrow: boolean;
  arrowTop: string;
  withShadow: boolean;
}

/** Popover */
export class Popover extends React.Component<PopoverProps> {
  static displayName = 'Popover';
  static defaultProps: DefaultProps = {
    title: '',
    'data-hook': POPOVER_DATA_HOOKS.Popover,
    withArrow: true,
    rightArrow: false,
    arrowTop: '15px',
    withShadow: true,
  };

  getDataAttributes = () => {
    const { withShadow, withArrow, rightArrow, title, arrowTop } = this.props;
    return {
      [POPOVER_DATA_KEYS.ArrowTop]: arrowTop,
      [POPOVER_DATA_KEYS.RightArrow]: rightArrow,
      [POPOVER_DATA_KEYS.Title]: title,
      [POPOVER_DATA_KEYS.WithArrow]: withArrow,
      [POPOVER_DATA_KEYS.WithShadow]: withShadow,
    };
  };

  render() {
    const {
      children,
      title,
      onClose,
      withArrow,
      rightArrow,
      arrowTop,
      withShadow,
      ...rest
    } = this.props;
    const arrow = withArrow && (
      <div className={styles.arrow} style={{ top: arrowTop }} />
    );
    const arrowBorderClasses = [styles.arrowBorder, styles.arrow]
    const arrowBorder = withArrow && (
      <div className={arrowBorderClasses.join(' ')} style={{ top: arrowTop }}/>
    )

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              {...styles(
                'root',
                { rtl, rightArrow, withArrow, withShadow },
                rest,
              )}
              data-hook={this.props['data-hook']}
              {...this.getDataAttributes()}
            >
              <div className={styles.container}>
                {title && <Text className={styles.title}>{title}</Text>}
                <div className={styles.children}>{children}</div>
              </div>
              <IconButton
                className={styles.close}
                onClick={onClose}
                as="a"
                icon={<Close height="24px" width="23px" />}
              />
              {arrow}
              {arrowBorder}
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}

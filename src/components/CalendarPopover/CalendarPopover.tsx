import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';
import { POPOVER_DATA_KEYS } from './dataHooks';
import { KEY_CODES } from '../../common/keyCodes';
import { st, classes } from './CalendarPopover.st.css';

export enum Sides {
  Right = 'right',
  Left = 'left',
}

export interface CalendarPopoverProps extends TPAComponentProps {
  title?: React.ReactNode;
  onClose(): void;
  withArrow?: boolean;
  arrowSide?: Sides;
  arrowTop?: number;
  withShadow?: boolean;
  isShown?: boolean;
  animated?: boolean;
  manualFocus?: boolean;
  closeAriaLabel: string;
}

interface DefaultProps {
  title: string;
  withArrow: boolean;
  arrowSide?: Sides;
  arrowTop: number;
  withShadow: boolean;
  isShown: boolean;
  animated: boolean;
  manualFocus: boolean;
}

/** CalendarPopover */
export class CalendarPopover extends React.Component<CalendarPopoverProps> {
  static displayName = 'CalendarPopover';
  static defaultProps: DefaultProps = {
    title: '',
    withArrow: true,
    arrowSide: Sides.Left,
    arrowTop: 42,
    withShadow: true,
    isShown: false,
    animated: false,
    manualFocus: false,
  };
  iconRef = React.createRef<HTMLButtonElement>();
  lastActiveElement = null;

  getDataAttributes = () => {
    const {
      withShadow,
      withArrow,
      arrowSide,
      title,
      arrowTop,
      animated,
      isShown,
      manualFocus,
    } = this.props;
    return {
      [POPOVER_DATA_KEYS.ArrowTop]: arrowTop,
      [POPOVER_DATA_KEYS.ArrowSide]: arrowSide,
      [POPOVER_DATA_KEYS.Title]: title,
      [POPOVER_DATA_KEYS.WithArrow]: withArrow,
      [POPOVER_DATA_KEYS.WithShadow]: withShadow,
      [POPOVER_DATA_KEYS.Animated]: animated,
      [POPOVER_DATA_KEYS.Shown]: isShown,
      [POPOVER_DATA_KEYS.ManualFocus]: manualFocus,
    };
  };

  _focusLastActive = () => {
    !this.props.manualFocus &&
      this.lastActiveElement &&
      this.lastActiveElement.focus();
  };

  _onEsc = (e) => {
    if (e.keyCode === KEY_CODES.Esc) {
      this.props.onClose();
    }
  };

  _manageA11y = () => {
    if (this.props.isShown) {
      document.addEventListener('keyup', this._onEsc);
      this.lastActiveElement = document.activeElement;
      !this.props.manualFocus && this.iconRef.current.focus();
    }
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.isShown) {
      this._manageA11y();
    } else if (!this.props.isShown) {
      document.removeEventListener('keyup', this._onEsc);
      this._focusLastActive();
    }
  }

  componentDidMount() {
    this._manageA11y();
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onEsc);
    this._focusLastActive();
  }

  render() {
    const {
      children,
      title,
      onClose,
      withArrow,
      arrowSide,
      arrowTop,
      withShadow,
      isShown,
      animated,
      className,
      closeAriaLabel,
    } = this.props;

    const pxArrowTop = `${arrowTop}px`;

    const titleToRender =
      typeof title === 'string' ? (
        <Text className={classes.title}>{title}</Text>
      ) : (
        title
      );

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              className={st(
                classes.root,
                { rtl, arrowSide, withArrow, withShadow, isShown, animated },
                className,
              )}
              data-hook={this.props['data-hook']}
              {...this.getDataAttributes()}
            >
              <div className={classes.contentContainer}>
                {titleToRender}
                <div className={classes.content}>{children}</div>
              </div>
              <IconButton
                className={classes.close}
                onClick={onClose}
                aria-label={closeAriaLabel}
                icon={<Close width={24} height={24} />}
                innerRef={this.iconRef}
              />
              <div className={classes.arrow} style={{ top: pxArrowTop }} />
              <div
                className={`${classes.arrowBorder} ${classes.arrow}`}
                style={{ top: pxArrowTop }}
              />
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}

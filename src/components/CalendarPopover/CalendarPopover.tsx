import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { Popover, Placement } from 'wix-ui-core/popover';
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
  title?: string;
  onClose(): void;
  withArrow?: boolean;
  arrowSide?: Sides;
  arrowTop?: number;
  withShadow?: boolean;
  isShown?: boolean;
  animated?: boolean;
  placement?: Placement;
  target: React.FunctionComponent;
  manualFocus?: boolean;
}

interface DefaultProps {
  title: string;
  withArrow: boolean;
  arrowSide?: Sides;
  arrowTop: number;
  withShadow: boolean;
  isShown: boolean;
  animated: boolean;
  placement: Placement;
  manualFocus: boolean;
}

/** CalendarPopover */
export class CalendarPopover extends React.Component<CalendarPopoverProps> {
  static displayName = 'CalendarPopover';
  static defaultProps: DefaultProps = {
    title: '',
    withArrow: true,
    arrowSide: Sides.Left,
    arrowTop: 15,
    withShadow: true,
    isShown: false,
    animated: false,
    placement: 'auto',
    manualFocus: true
  };
  closeBtn = React.createRef<IconButton>();
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
    } = this.props;
    return {
      [POPOVER_DATA_KEYS.ArrowTop]: arrowTop,
      [POPOVER_DATA_KEYS.ArrowSide]: arrowSide,
      [POPOVER_DATA_KEYS.Title]: title,
      [POPOVER_DATA_KEYS.WithArrow]: withArrow,
      [POPOVER_DATA_KEYS.WithShadow]: withShadow,
      [POPOVER_DATA_KEYS.Animated]: animated,
      [POPOVER_DATA_KEYS.Shown]: isShown,
    };
  };

  _onClose = () => {
    this.props.onClose();
    !this.props.manualFocus && this.lastActiveElement && this.lastActiveElement.focus();
  }

  onEsc = e => {
    if (e.keyCode === KEY_CODES.Esc) {
      this._onClose();
    }
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.isShown && this.props.isShown) {
      document.addEventListener('keyup', this.onEsc);
      this.lastActiveElement = document.activeElement;
    } else {
      document.removeEventListener('keyup', this.onEsc);
    }
  }

  componentDidMount() {
    if (this.props.isShown) {
      this.lastActiveElement = document.activeElement;
      document.addEventListener('keyup', this.onEsc);
    }
  }

  render() {
    const {
      children,
      title,
      withArrow,
      arrowSide,
      arrowTop,
      withShadow,
      isShown,
      animated,
      className,
      placement,
      target,
    } = this.props;

    const pxArrowTop = `${arrowTop}px`;
    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <Popover
              onClickOutside={this._onClose}
              showArrow={false}
              placement={placement}
              shown={isShown}
              className={st(classes.popover)}
            >
              <Popover.Element>{target}</Popover.Element>
              <Popover.Content>
                <div
                  className={st(
                    classes.root,
                    { rtl, arrowSide, withArrow, withShadow, isShown, animated },
                    className,
                  )}
                  data-hook={this.props['data-hook']}
                  {...this.getDataAttributes()}
                >
                  <div className={classes.container}>
                    {title && <Text className={classes.title}>{title}</Text>}
                    <div className={classes.children}>{children}</div>
                  </div>
                  <IconButton
                    ref={this.closeBtn}
                    className={classes.close}
                    onClick={this._onClose}
                    as="a"
                    icon={<Close height="24px" width="23px" />}
                  />
                  <div className={classes.arrow} style={{ top: pxArrowTop }} />
                  <div
                    className={`${classes.arrowBorder} ${classes.arrow}`}
                    style={{ top: pxArrowTop }}
                  />
                </div>
              </Popover.Content>
            </Popover>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}

import * as React from 'react';
import classNames from 'classnames';
import { RadioButton as CoreRadio } from 'wix-ui-core/radio-button';
import styles from './Ratings.st.css';
import { ReactComponent as StarIcon } from '../../assets/icons/Star.svg';
import { RATINGS_DATA_HOOKS, RATINGS_DATA_KEYS } from './dataHooks';
import { KEY_CODES } from '../../common/keyCodes';
import { Key } from 'protractor';

export enum Size {
  Small = 'small',
  Large = 'large',
}

export enum Mode {
  Input = 'input',
  Display = 'display',
}

export enum Layout {
  Aside = 'aside',
  Bottom = 'bottom',
}

export interface RatingsProps {
  value: number;
  mode: Mode;
  onSelect?(value: number): void;
  inputOptions?: string[];
  disabled?: boolean;
  error?: boolean;
  size?: Size;
  layout?: Layout;
  ratingDisplay?: string;
  countDisplay?: string;
  'data-hook'?: string;
}

interface DefaultProps {
  value: number;
  disabled: boolean;
  error: boolean;
  mode: Mode;
  size: Size;
  layout: Layout;
  inputOptions: string[];
}

interface RatingsState {
  currentHovered: number;
  currentFocus: number;
  listFocused: boolean;
  captured: boolean;
}

/** Ratings component based on IconToggle */
export class Ratings extends React.Component<RatingsProps, RatingsState> {
  static displayName = 'Ratings';
  static defaultProps: DefaultProps = {
    value: 0,
    disabled: false,
    error: false,
    mode: Mode.Input,
    size: Size.Small,
    layout: Layout.Aside,
    inputOptions: [],
  };

  iconRefs = [];

  state: RatingsState = {
    currentHovered: 0,
    currentFocus: 0,
    listFocused: false,
    captured: false,
  };

  getDataAttributes() {
    const { disabled, error, size } = this.props;

    return {
      [RATINGS_DATA_KEYS.Disabled]: disabled,
      [RATINGS_DATA_KEYS.Error]: error,
      [RATINGS_DATA_KEYS.Size]: size,
    };
  }

  handleHoverIcon = (idx: number) => {
    this.setState({ currentHovered: idx });
  };

  handleUnhoverIcon = () => {
    this.setState({ currentHovered: 0 });
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { onSelect } = this.props;
    const currentFocus = this.state.currentFocus;
    let direction = 0;

    switch (e.keyCode) {
      case KEY_CODES.ArrowUp:
      case KEY_CODES.ArrowRight: {
        direction = 1;

        break;
      }
      case KEY_CODES.ArrowDown:
      case KEY_CODES.ArrowLeft: {
        direction = -1;

        break;
      }
      case KEY_CODES.Spacebar:
      case KEY_CODES.Enter: {
        onSelect && onSelect(currentFocus);
        break;
      }
      default: {
      }
    }

    if (direction) {
      let nextFocus = (currentFocus + direction) % 5;
      nextFocus = nextFocus <= 0 ? nextFocus + 5 : nextFocus;

      this.setState({ currentFocus: nextFocus }, () => {
        this.iconRefs[nextFocus - 1].focus();
      });
    }
  };

  handleUnfocus = (e: React.FocusEvent) => {
    if (
      !e.relatedTarget ||
      (e.relatedTarget && this.iconRefs.indexOf(e.relatedTarget) === -1)
    ) {
      this.setState({ currentFocus: 0, listFocused: false, captured: false });
    }
  };

  handleCaptureFocus = (e: React.FocusEvent) => {
    const { value } = this.props;
    const { captured } = this.state;

    this.setState({ listFocused: true });

    if (!captured && value && e.target !== this.iconRefs[value - 1]) {
      this.setState({ captured: true });
      this.iconRefs[value - 1].focus();
    }
  };

  handleItemCapture = (idx: number) => {
    this.setState({ currentFocus: idx });
  };

  onClick = (idx: number) => {
    const { mode, onSelect } = this.props;

    this.setState({ currentFocus: idx });
    this.iconRefs[idx - 1].focus();

    if (mode === Mode.Input && onSelect) {
      onSelect(idx);
    }
  };

  setRef = ref => {
    this.iconRefs.push(ref);
  };

  _renderContent = () => <StarIcon />;

  _renderInputOptions = () => {
    const { inputOptions, value } = this.props;
    const { currentHovered, currentFocus } = this.state;
    const currentValue = currentFocus ? currentFocus : currentHovered;

    return (
      <div className={styles.labelList}>
        {currentValue ? (
          <span
            data-hook={RATINGS_DATA_HOOKS.InputOption}
            className={styles.inputOption}
          >
            {inputOptions[currentValue - 1]}
          </span>
        ) : (
          <span
            data-hook={RATINGS_DATA_HOOKS.InputOptionCurrent}
            className={classNames(
              styles.inputOption,
              styles.inputOptionCurrent,
            )}
          >
            {inputOptions[value - 1]}
          </span>
        )}
      </div>
    );
  };

  _renderRatingInfo = () => {
    const { ratingDisplay, countDisplay } = this.props;
    const info = [];

    if (ratingDisplay) {
      info.push(ratingDisplay);
    }

    if (countDisplay) {
      info.push(countDisplay);
    }

    return (
      <div
        data-hook={RATINGS_DATA_HOOKS.RatingInfo}
        className={styles.ratingInfo}
      >
        {info.join(' | ')}
      </div>
    );
  };

  render() {
    const {
      value,
      onSelect,
      disabled,
      error,
      size,
      mode,
      inputOptions,
      layout,
      ratingDisplay,
      countDisplay,
      ...rest
    } = this.props;
    const { listFocused } = this.state;
    const content = this._renderContent();
    const ratingList = Array.from(new Array(5));
    const showInputOptions = inputOptions.length && mode === Mode.Input;
    const showRatingInfo =
      (ratingDisplay || countDisplay) && mode === Mode.Display;

    return (
      <div
        {...styles('root', { disabled, error, size, mode, layout }, rest)}
        {...this.getDataAttributes()}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleUnfocus}
        data-hook={this.props['data-hook']}
      >
        <div
          className={classNames(styles.iconList, {
            [styles.iconListFocused]: listFocused,
          })}
          onFocusCapture={this.handleCaptureFocus}
        >
          <input type="radio" hidden checked readOnly />
          {ratingList.map((_el, idx: number) => {
            const humanOrder = idx + 1;
            const checked = humanOrder <= value;
            const ariaLabel = inputOptions.length
              ? inputOptions[4 - idx]
              : (5 - idx).toString();

            return (
              <label
                data-hook={RATINGS_DATA_HOOKS.IconWrapper}
                key={idx}
                {...styles(styles.icon, { checked })}
                onMouseEnter={() => this.handleHoverIcon(humanOrder)}
                onMouseLeave={this.handleUnhoverIcon}
                onFocusCapture={() => {
                  this.handleItemCapture(humanOrder);
                }}
                ref={this.setRef}
                tabIndex={0}
              >
                <CoreRadio
                  tabIndex={-1}
                  value={humanOrder.toString()}
                  aria-label={ariaLabel}
                  uncheckedIcon={content}
                  checkedIcon={content}
                  checked={checked}
                  disabled={disabled}
                  onChange={() => this.onClick(humanOrder)}
                />
              </label>
            );
          })}
        </div>
        {!!showInputOptions && this._renderInputOptions()}
        {!!showRatingInfo && this._renderRatingInfo()}
      </div>
    );
  }
}

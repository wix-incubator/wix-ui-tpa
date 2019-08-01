import * as React from 'react';
import { RadioButton as CoreRadio } from 'wix-ui-core/radio-button';
import styles from './Ratings.st.css';
import { ReactComponent as StarIcon } from '../../assets/icons/Star.svg';
import { RATINGS_DATA_HOOKS, RATINGS_DATA_KEYS } from './dataHooks';
import classNames from 'classnames';

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
}

// Define values for keycodes
const VK_LEFT = 'ArrowLeft';
const VK_UP = 'ArrowUp';
const VK_RIGHT = 'ArrowRight';
const VK_DOWN = 'ArrowDown';

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
    const { currentFocus } = this.state;

    if (currentFocus === 0) {
      return;
    }

    switch (e.key) {
      case VK_DOWN:
      case VK_LEFT: {
        e.preventDefault();

        if (currentFocus === 1) {
          this.setState({ currentFocus: 5 }, () => {
            this.iconRefs[0].focus();
          });

          return;
        }

        this.setState({ currentFocus: currentFocus - 1 }, () => {
          this.iconRefs[5 - this.state.currentFocus].focus();
        });

        return;
      }
      case VK_UP:
      case VK_RIGHT: {
        e.preventDefault();
        if (currentFocus === 5) {
          this.setState({ currentFocus: 1 }, () => {
            this.iconRefs[4].focus();
          });

          return;
        }

        this.setState({ currentFocus: currentFocus + 1 }, () => {
          this.iconRefs[5 - this.state.currentFocus].focus();
        });

        return;
      }
      default: {
      }
    }
  };

  handleUnfocus = e => {
    if (!e.relatedTarget) {
      this.setState({ currentFocus: 0 });
    }
  };

  onClick = (idx: number) => {
    const { mode, onSelect } = this.props;

    this.setState({ currentFocus: idx });

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
    const currentValue = currentFocus || currentHovered;

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
    const content = this._renderContent();
    const ratingList = Array.from(new Array(5));
    const ratingListLength = ratingList.length;
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
        <div className={styles.iconList}>
          {ratingList.map((_el, idx: number) => {
            const humanOrder = ratingListLength - idx;
            const checked = humanOrder <= value;
            const ariaLabel = inputOptions.length
              ? inputOptions[5 - idx - 1]
              : (5 - idx).toString();

            return (
              <span
                data-hook={RATINGS_DATA_HOOKS.IconWrapper}
                key={idx}
                tabIndex={-1}
                {...styles(styles.icon, { checked })}
                onMouseEnter={() => this.handleHoverIcon(humanOrder)}
                onMouseLeave={this.handleUnhoverIcon}
                ref={this.setRef}
              >
                <CoreRadio
                  aria-label={ariaLabel}
                  uncheckedIcon={content}
                  checkedIcon={content}
                  checked={checked}
                  disabled={disabled}
                  onChange={() => this.onClick(humanOrder)}
                />
              </span>
            );
          })}
        </div>
        {!!showInputOptions && this._renderInputOptions()}
        {!!showRatingInfo && this._renderRatingInfo()}
      </div>
    );
  }
}

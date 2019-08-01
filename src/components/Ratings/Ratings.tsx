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

  state: RatingsState = {
    currentHovered: 0,
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

  _renderContent = () => <StarIcon />;

  _renderInputOptions = () => {
    const { inputOptions, value } = this.props;
    const { currentHovered } = this.state;

    return (
      <div className={styles.labelList}>
        {currentHovered ? (
          <span
            data-hook={RATINGS_DATA_HOOKS.InputOption}
            className={styles.inputOption}
          >
            {inputOptions[currentHovered - 1]}
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
                {...styles(styles.icon, { checked })}
                onMouseEnter={() => this.handleHoverIcon(humanOrder)}
                onMouseLeave={this.handleUnhoverIcon}
              >
                <CoreRadio
                  aria-label={ariaLabel}
                  uncheckedIcon={content}
                  checkedIcon={content}
                  checked={checked}
                  disabled={disabled}
                  onChange={() => mode === Mode.Input && onSelect(humanOrder)}
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

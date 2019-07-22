import * as React from 'react';
import { RadioButton as CoreRadio } from 'wix-ui-core/radio-button';
import styles from './Rating.st.css';
import { ReactComponent as StarIcon } from '../../assets/icons/Star.svg';

export enum IconSize {
  Small = 'small',
  Large = 'large',
}

export enum Mode {
  Input = 'input',
  Display = 'display',
}

export interface RatingProps {
  value: number;
  mode: Mode;
  onSelect?(value: number): void;
  disabled?: boolean;
  error?: boolean;
  iconSize?: IconSize;
}

interface DefaultProps {
  value: number;
  disabled: boolean;
  error: boolean;
  mode: Mode;
  iconSize: IconSize;
}

/** Rating component based on IconToggle */
export class Rating extends React.Component<RatingProps> {
  static displayName = 'Rating';
  static defaultProps: DefaultProps = {
    value: 3,
    disabled: false,
    error: false,
    mode: Mode.Input,
    iconSize: IconSize.Small,
  };

  _renderContent = () => <StarIcon />;

  render() {
    const {
      value,
      onSelect,
      disabled,
      error,
      iconSize,
      mode,
      ...rest
    } = this.props;
    const content = this._renderContent();
    const ratingList = Array.from(new Array(5));
    const ratingListLength = ratingList.length;

    return (
      <div {...styles('root', {}, rest)}>
        <div className={styles.iconList}>
          {ratingList.map((_el, idx: number) => {
            const checked = ratingListLength - idx <= value;

            return (
              <span
                key={idx}
                {...styles('icon', {
                  checked,
                  disabled,
                  error,
                  iconSize,
                  mode,
                })}
              >
                <CoreRadio
                  uncheckedIcon={content}
                  checkedIcon={content}
                  checked={checked}
                  disabled={disabled}
                  onChange={() =>
                    mode === Mode.Input && onSelect(ratingListLength - idx)
                  }
                />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

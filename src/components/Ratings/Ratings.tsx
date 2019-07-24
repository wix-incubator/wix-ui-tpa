import * as React from 'react';
import { RadioButton as CoreRadio } from 'wix-ui-core/radio-button';
import styles from './Ratings.st.css';
import { ReactComponent as StarIcon } from '../../assets/icons/Star.svg';

export enum IconSize {
  Small = 'small',
  Large = 'large',
}

export enum Mode {
  Input = 'input',
  Display = 'display',
}

export interface RatingsProps {
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

/** Ratings component based on IconToggle */
export class Ratings extends React.Component<RatingsProps> {
  static displayName = 'Ratings';
  static defaultProps: DefaultProps = {
    value: 0,
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
      <div {...styles('root', { disabled, error, iconSize, mode }, rest)}>
        <div className={styles.iconList}>
          {ratingList.map((_el, idx: number) => {
            const checked = ratingListLength - idx <= value;

            return (
              <span
                data-hook="icon-wrapper"
                key={idx}
                {...styles('icon', { checked })}
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

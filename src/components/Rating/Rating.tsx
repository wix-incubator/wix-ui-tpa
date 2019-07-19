import * as React from 'react';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import styles from './Rating.st.css';
import { ReactComponent as StarIcon } from '../../assets/icons/Star.svg';

export enum IconSize {
  LARGE = 'large',
}

export enum Mode {
  EDIT = 'edit',
  PREVIEW = 'preview',
}

export interface RatingProps {
  value: number;
  mode: Mode;
  onSelect?(value: number): void;
  maxRating?: number;
  disabled?: boolean;
  error?: boolean;
  iconSize?: IconSize;
}

interface DefaultProps {
  value: number;
  maxRating: number;
  disabled: boolean;
  error: boolean;
  mode: Mode;
}

/** Rating component based on IconToggle */
export class Rating extends React.Component<RatingProps> {
  static displayName = 'Rating';
  static defaultProps: DefaultProps = {
    value: 0,
    maxRating: 5,
    disabled: false,
    error: false,
    mode: Mode.PREVIEW,
  };

  _renderContent = () => <StarIcon />;

  render() {
    const {
      value,
      maxRating,
      onSelect,
      disabled,
      error,
      iconSize,
      mode,
      ...rest
    } = this.props;
    const content = this._renderContent();
    const ratingList = Array.from(new Array(maxRating));
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
                <CoreCheckbox
                  uncheckedIcon={content}
                  checkedIcon={content}
                  indeterminateIcon={content}
                  error={false}
                  indeterminate={false}
                  checked={checked}
                  disabled={disabled}
                  onChange={() =>
                    mode === Mode.EDIT && onSelect(ratingListLength - idx)
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

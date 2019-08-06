import * as React from 'react';
import { RadioButton } from 'wix-ui-core/radio-button';
import styles from './ColorPickerItem.st.css';
export interface ColorPickerItemProps {
  onClick(index: string): void;
  color: string;
  ariaLabel: string;
  checked?: boolean;
}
export interface ColorPickerItemDefaultProps {
  checked: boolean;
  color: string;
}

/** ColorPickerItem */
export class ColorPickerItem extends React.Component<ColorPickerItemProps> {
  static displayName = 'ColorPickerItem';
  static defaultProps: ColorPickerItemDefaultProps = {
    checked: false,
    color: 'white',
  };

  getRadio = ({ checked, color }: ColorPickerItemProps) => (
    <div className={styles.radioOuter}>
      <div className={styles.radioInner} style={{ backgroundColor: color }} />
    </div>
  );

  render() {
    const { ariaLabel, color, checked, onClick } = this.props;

    return (
      <div {...styles('root', {}, { ...this.props })}>
        <RadioButton
          aria-label={ariaLabel}
          checked={checked}
          checkedIcon={this.getRadio({
            ...this.props,
            checked: true,
          })}
          uncheckedIcon={this.getRadio({
            ...this.props,
            checked: false,
          })}
          onChange={() => onClick(color)}
        />
      </div>
    );
  }
}

import * as React from 'react';
import styles from './ColorPickerItem.st.css';
import { RadioButton } from 'wix-ui-core/radio-button';
import { RadioButtonProps } from 'wix-ui-core/dist/src/components/radio-button/RadioButton';
import { colorPickerItemDataHook } from '../dataHooks';

export interface ColorPickerItemProps extends RadioButtonProps {
  className?: string;
  key?: number;
}

interface ColorPickerItemState {
  focused: boolean;
}

/** ColorPickerItem */
export class ColorPickerItem extends React.Component<
  ColorPickerItemProps,
  ColorPickerItemState
> {
  static displayName = colorPickerItemDataHook;
  state = { focused: false };

  getRadio = ({ value }: ColorPickerItemProps) => (
    <div className={styles.radioOuter}>
      <div className={styles.radioInner} style={{ backgroundColor: value }} />
    </div>
  );

  render = () => {
    const { value, checked, onChange } = this.props;

    return (
      <RadioButton
        {...styles(
          'root',
          { checked, focused: this.state.focused },
          { ...this.props },
        )}
        aria-label={this.props['aria-label']}
        data-hook={ColorPickerItem.displayName}
        checked={checked}
        checkedIcon={this.getRadio({
          ...this.props,
          checked: true,
        })}
        value={value}
        uncheckedIcon={this.getRadio({
          ...this.props,
          checked: false,
        })}
        onChange={onChange}
        onHover={() => this.setState({ focused: true })}
        onIconBlur={() => this.setState({ focused: false })}
      />
    );
  };
}

import * as React from 'react';
import styles from './ColorPicker.st.css';
import { RadioButton } from 'wix-ui-core/radio-button';

interface ColorPickerItemProps {
  onClick(index: string): void;
  color: string;
  ariaLabel: string;
  checked?: boolean;
}

interface ColorPickerItemDefaultProps {
  checked: boolean;
  color: string;
}

/** ColorPickerItem */
class ColorPickerItem extends React.Component<ColorPickerItemProps> {
  static displayName = 'ColorPickerItem';
  static defaultProps: ColorPickerItemDefaultProps = {
    checked: false,
    color: 'white',
  };

  getRadio = ({ checked, color }: ColorPickerItemProps) => (
    <div
      {...styles('radioOuter', {
        checked,
      })}
    >
      <div {...styles('radioInner')} style={{ backgroundColor: color }} />
    </div>
  );

  render() {
    const { ariaLabel, color, checked, onClick } = this.props;

    return (
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
    );
  }
}

/** ColorPicker */
export class ColorPicker extends React.Component {
  static displayName = 'ColorPicker';

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  render() {
    return (
      <div {...styles('root', {}, { ...this.props })}>
        {this.props.children}
      </div>
    );
  }
}

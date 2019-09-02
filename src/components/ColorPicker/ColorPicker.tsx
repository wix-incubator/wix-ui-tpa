import * as React from 'react';
import styles from './ColorPicker.st.css';
import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { colorPickerDataHook } from './dataHooks';

interface ColorPickerProps {
  /** A callback to invoke on change */
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
}

/** ColorPicker */
export class ColorPicker extends React.Component<ColorPickerProps> {
  static displayName = colorPickerDataHook;

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  render() {
    const { onChange } = this.props;

    return (
      <div {...styles('root', {}, { ...this.props })}>
        {React.Children.map(
          this.props.children,
          (item: ColorPickerItem, index: number) => {
            if (!React.isValidElement(item)) {
              return null;
            }
            return React.cloneElement(item, {
              onChange,
              key: index,
              className: styles.item,
            });
          },
        )}
      </div>
    );
  }
}

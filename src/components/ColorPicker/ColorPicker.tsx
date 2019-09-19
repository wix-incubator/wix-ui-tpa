import * as React from 'react';
import styles from './ColorPicker.st.css';
import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { colorPickerDataHook } from './dataHooks';
import { TPAComponentProps } from '../../types';

interface ColorPickerProps extends TPAComponentProps {
  /** A callback to invoke on change */
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
}

/** ColorPicker */
export class ColorPicker extends React.Component<ColorPickerProps> {
  static displayName = colorPickerDataHook;

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  render() {
    const { onChange, children, ...rest } = this.props;

    return (
      <div {...styles('root', {}, rest)}>
        {React.Children.map(
          children,
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

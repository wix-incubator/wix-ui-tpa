import * as React from 'react';
import { st, classes } from './ColorPicker.st.css';
import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { colorPickerDataHook } from './dataHooks';
import { TPAComponentProps } from '../../types';

interface ColorPickerProps extends TPAComponentProps {
  /** A callback to invoke on a value change */
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
}

/** ColorPicker */
export class ColorPicker extends React.Component<ColorPickerProps> {
  static displayName = colorPickerDataHook;

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  render() {
    const { onChange, children, className } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        {React.Children.map(
          children,
          (item: ColorPickerItem, index: number) => {
            if (!React.isValidElement(item)) {
              return null;
            }
            return React.cloneElement(item, {
              onChange,
              key: index,
              className: classes.item,
            });
          },
        )}
      </div>
    );
  }
}

import * as React from 'react';
import { st, classes } from './ColorPicker.st.css';
import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { colorPickerDataHook } from './dataHooks';
import { TPAComponentProps } from '../../types';
import { RadioButtonKeyDownEvent } from 'wix-ui-core/radio-button';
import { KEYS } from '../../common/keyCodes';

interface ColorPickerProps extends TPAComponentProps {
  /** A callback to invoke on a value change */
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
  /** aria-label - Accessibility */
  'aria-label'?: string;
}

/** ColorPicker */
export class ColorPicker extends React.Component<ColorPickerProps> {
  static displayName = colorPickerDataHook;

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  startKeyDownHandler = (event: RadioButtonKeyDownEvent) => {
    if (event.key === KEYS.ArrowLeft || event.key === KEYS.ArrowUp) {
      event.nativeEvent.preventDefault();
    }
  };

  endKeyDownHandler = (event: RadioButtonKeyDownEvent) =>
    (event.key === KEYS.ArrowRight || event.key === KEYS.ArrowDown) &&
    event.nativeEvent.preventDefault();

  getKeyDownHandler = (index: number, length: number) =>
    index === 0
      ? this.startKeyDownHandler
      : index === length - 1
      ? this.endKeyDownHandler
      : undefined;

  render() {
    const { onChange, children, className } = this.props;
    const validChildren: ColorPickerItem[] = (React.Children.map(
      children,
      (item: ColorPickerItem) => {
        if (!React.isValidElement(item)) {
          return null;
        }
        return item;
      },
    ) || []).filter(Boolean);

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
        role="radiogroup"
        aria-label={this.props['aria-label']}
      >
        {validChildren.map(
          (item: ColorPickerItem, index: number, all: ColorPickerItem[]) => {
            return React.cloneElement(
              (item as unknown) as React.ReactElement<ColorPickerItemProps>,
              {
                onChange,
                key: index,
                className: classes.item,
                onKeyDown: this.getKeyDownHandler(index, all.length),
              },
            );
          },
        )}
      </div>
    );
  }
}

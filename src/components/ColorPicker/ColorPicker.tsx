import * as React from 'react';
import { st, classes } from './ColorPicker.st.css';
import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { colorPickerDataHook } from './dataHooks';
import { TPAComponentProps } from '../../types';
import { generateKey } from '../../common/random';

interface ColorPickerProps extends TPAComponentProps {
  /** A callback to invoke on a value change */
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
  /** aria-label - Accessibility */
  'aria-label'?: string;
}

/** ColorPicker */
export class ColorPicker extends React.Component<ColorPickerProps> {
  private readonly groupName: string;
  static displayName = colorPickerDataHook;

  constructor(props) {
    super(props);

    this.groupName = generateKey('ColorPicker_group');
  }

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  render() {
    const { onChange, children, className } = this.props;

    return (
      <fieldset
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
        aria-label={this.props['aria-label']}
      >
        <div className={classes.wrapper}>
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
              name: this.groupName,
            });
          },
        )}
        </div>
      </fieldset>
    );
  }
}

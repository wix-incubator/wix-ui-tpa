import * as React from 'react';
import styles from './ColorPicker.st.css';
import { ColorPickerItem, ColorPickerItemProps } from './ColorPickerItem';

/** ColorPicker */
export class ColorPicker extends React.Component {
  static displayName = 'ColorPicker';

  static Item = (props: ColorPickerItemProps) => <ColorPickerItem {...props} />;

  render() {
    return (
      <div {...styles('root', {}, { ...this.props })}>
        {/* {this.props.children} */}
        {React.Children.map(this.props.children, (child: any) => {
          return React.cloneElement(child, { className: styles.foo });
        })}
      </div>
    );
  }
}

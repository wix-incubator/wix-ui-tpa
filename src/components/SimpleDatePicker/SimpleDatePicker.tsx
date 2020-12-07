import * as React from 'react';
import classNames from 'classnames';
import { TPAComponentProps } from '../../types';

import { st, classes } from './SimpleDatePicker.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface SimpleDatePickerProps extends TPAComponentProps {
    disabled?: boolean;
    theme?: 'Box' | 'Line';
}

interface DefaultProps {
  disabled: boolean;
  theme: 'Box' | 'Line';
}

/** SimpleDatePicker */
export class SimpleDatePicker extends React.Component<SimpleDatePickerProps> {
  static displayName = 'SimpleDatePicker';
  static defaultProps: DefaultProps = {
      disabled: true,
      theme: 'Line',
  };

  render() {
    const { className, disabled, theme } = this.props;

    return (
      // Add this context consumer if the component needs to be aware of `mobile` and `rtl` states of the app
      // For more information: https://github.com/wix/wix-ui-tpa/blob/master/docs/USAGE.md#tpacomponentsprovider
      // <TPAComponentsConsumer>
      //   {({ mobile, rtl }) => (
          <div className={st(classes.root, { theme, disabled }, classes.themeClassName, className)} data-hook={this.props['data-hook']}>
          </div>
      //   )}
      // </TPAComponentsConsumer>
    );
  }
}



// import * as React from "react";
// import { st, classes } from './DatePickerInput.st.css';
//
// export interface Props extends TPAComponentProps {
//     disabled?: boolean;
// }
//
// interface DefaultProps {
//     disabled: boolean;
// }
//
// export class Test1 extends React.Component<Props> {
//     static defaultProps: DefaultProps = {
//         disabled: false,
//     };
//
//     render() {
//         const {className, disabled} = this.props;
//         return (
//             <div className={st(classes.root, { disabled }, `${classes.anotherClass} ${className}`)}/>
//         );
//     }
// }
//
// import classNames from 'classnames';
// import {TPAComponentProps} from "../../types";
//
// const { className, disabled } = this.props;
// <div className={st(classes.root, { disabled, }, classNames(classes.anotherClass, className))} />
//
//
//
// const { className, disabled } = this.props;
// <div className={st(classes.root, { disabled, }, classes.anotherClass, className)} />

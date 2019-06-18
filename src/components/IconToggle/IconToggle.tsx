import * as React from "react";
import {
  Checkbox as CoreCheckbox,
  CheckboxProps as CoreCheckboxProps
} from "wix-ui-core/checkbox";
import styles from "./IconToggle.st.css";
import { TPAComponentsConsumer } from "../TPAComponentsConfig";

import { ReactComponent as DefaultIcon } from "./EmptyStateDefault.svg";

type Placement = "right" | "left";

export interface IconToggleProps {
  icon: React.ReactNode;
  label: string;
  labelPlacement: Placement;
}

interface DefaultProps {
  icon: React.ReactNode;
  label: string;
  labelPlacement: Placement;
}

interface State {
  checked: boolean;
}

/** IconToggle */
export class IconToggle extends React.Component<IconToggleProps, State> {
  static displayName = "IconToggle";
  static defaultProps: DefaultProps = { icon: DefaultIcon, label: "Like", labelPlacement: 'right'};

  state = { checked: false };

  _handleChange = ({ checked }) => {
    this.setState({ checked: checked });
  };

  render() {
    const { checked } = this.state;
    const { icon, label, labelPlacement, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles("root", { mobile, labelPlacement }, rest)}>
            <CoreCheckbox
              className={styles.toggle}
              onChange={this._handleChange}
              uncheckedIcon={<DefaultIcon />}
              checkedIcon={<DefaultIcon />}
              indeterminateIcon={<DefaultIcon />}
              error={false}
              indeterminate={false}
              checked={checked}
            />
            <span className={styles.label}>{label}</span>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

// /** IconToggle */
// export class IconToggle extends React.Component<IconToggleProps, State> {
//   static displayName = 'IconToggle';
//   static defaultProps: DefaultProps = { buttonText: 'Click me!' };

//   state = { count: 0 };

//   _handleClick = () => {
//     this.setState(({ count }) => ({ count: count + 1 }));
//   };

//   render() {
//     const { count } = this.state;
//     const { buttonText, ...rest } = this.props;
//     const isEven = count % 2 === 0;

//     return (
//       <TPAComponentsConsumer>
//         {({ mobile }) => (
//           <div {...styles('root', { mobile }, rest)}>
//             <Text {...styles('number', { even: isEven, odd: !isEven })}>
//               You clicked this button {isEven ? 'even' : 'odd'} number ({count})
//               of times
//             </Text>

//             <div className={styles.button}>
//               <Button onClick={this._handleClick}>{buttonText}</Button>
//             </div>
//           </div>
//         )}
//       </TPAComponentsConsumer>
//     );
//   }
// }

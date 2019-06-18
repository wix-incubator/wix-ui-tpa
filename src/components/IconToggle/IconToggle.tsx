import * as React from "react";
import {
  Checkbox as CoreCheckbox,
  CheckboxProps as CoreCheckboxProps,
} from "wix-ui-core/checkbox";
import styles from "./IconToggle.st.css";
import { TPAComponentsConsumer } from "../TPAComponentsConfig";

import { ReactComponent as DefaultIcon } from "./EmptyStateDefault.svg";

export interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  checked: boolean;
}

export type Placement = "right" | "left";

export interface IconToggleProps {
  icon: React.ReactNode;
  label: React.ReactNode | string;
  labelPlacement: Placement;
  onChange?: (event: OnChangeEvent) => void;
  checked: boolean;
}

interface DefaultProps {
  icon: React.ReactNode;
  label: React.ReactNode | string;
  labelPlacement: Placement;
  checked: boolean;
}

/** IconToggle */
export class IconToggle extends React.Component<IconToggleProps> {
  static displayName = "IconToggle";
  static defaultProps: DefaultProps = { 
    icon: DefaultIcon, 
    label: "Like", 
    labelPlacement: 'right', 
    checked: false,
  };

  render() {
    const { icon, label, labelPlacement, onChange, checked, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles("root", { mobile, checked, labelPlacement }, rest)}>
            <CoreCheckbox
              className={styles.toggle}
              uncheckedIcon={<DefaultIcon className={styles.icon} />}
              checkedIcon={<DefaultIcon className={styles.icon} />}
              indeterminateIcon={<DefaultIcon className={styles.icon}/>}
              error={false}
              indeterminate={false}
              checked={checked}
              onChange={onChange}
            />
            <span className={styles.label}>{label}</span>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}


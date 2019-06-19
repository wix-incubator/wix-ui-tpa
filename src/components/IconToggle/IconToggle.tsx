import * as React from "react";
import {
  Checkbox as CoreCheckbox,
  CheckboxProps as CoreCheckboxProps
} from "wix-ui-core/checkbox";
import styles from "./IconToggle.st.css";
import { TPAComponentsConsumer } from "../TPAComponentsConfig";

import { ReactComponent as HeartIcon } from "../../icons/raw/Heart.svg";

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
  disabled: boolean;
}

interface DefaultProps {
  icon: React.ReactNode;
  label: React.ReactNode | string;
  labelPlacement: Placement;
  checked: boolean;
  disabled: boolean;
}

/** IconToggle */
export class IconToggle extends React.Component<IconToggleProps> {
  static displayName = "IconToggle";
  static defaultProps: DefaultProps = {
    icon: <HeartIcon />,
    label: "Like",
    labelPlacement: "right",
    checked: false,
    disabled: false
  };

  render() {
    const {
      icon,
      label,
      labelPlacement,
      onChange,
      checked,
      disabled,
      ...rest
    } = this.props;

    const renderIcon = () => (
      <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.label}>{label}</div>
      </div>
    );

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...styles(
              "root",
              { mobile, checked, disabled, labelPlacement },
              rest
            )}
          >
            <CoreCheckbox
              className={styles.toggle}
              uncheckedIcon={renderIcon()}
              checkedIcon={renderIcon()}
              indeterminateIcon={renderIcon()}
              error={false}
              indeterminate={false}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
            />
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

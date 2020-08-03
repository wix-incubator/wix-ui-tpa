import * as React from 'react';
import { RadioButton as CoreRadioButton } from 'wix-ui-core/radio-button';
import { RADIOBUTTON_DATA_KEYS, RADIOBUTTON_DATA_HOOKS } from './dataHooks';
import { st, classes } from './RadioButton.st.css';

export interface RadioButtonChangeEvent
  extends React.MouseEvent<HTMLDivElement> {
  value: string;
}

export interface RadioButtonClickEvent
  extends React.MouseEvent<HTMLDivElement> {
  value: string;
}

export interface RadioButtonProps {
  className?:string,
  checked?: boolean;
  disabled?: boolean;
  value: string;
  name?: string;
  label: string;
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  name: string;
  'data-hook': string;
}

/** Radio button icon */
const radioBtnIcon = <span className={st(classes.checkmark)  }/>;

/** RadioButton */
export class RadioButton extends React.Component<RadioButtonProps> {
  static displayName = 'RadioButton';
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    name: '',
    'data-hook': RADIOBUTTON_DATA_HOOKS.RadioButtonWrapper,
  };

  getDataAttributes() {
    const { checked, disabled } = this.props;
    return {
      [RADIOBUTTON_DATA_KEYS.Checked]: checked,
      [RADIOBUTTON_DATA_KEYS.Disabled]: disabled,
    };
  }

  render() {
    const {
      checked,
      disabled,
      value,
      label,
      name,
      onChange,
      className
    } = this.props;

    return (
      <CoreRadioButton
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        checked={checked}
        disabled={disabled}
        value={value}
        label={<label>{label}</label>}
        name={name}
        onChange={onChange}
        checkedIcon={radioBtnIcon}
        uncheckedIcon={radioBtnIcon}
        aria-label={label}
        className={st(classes.root,  { checked, disabled }, className)}
      />
    );
  }
}

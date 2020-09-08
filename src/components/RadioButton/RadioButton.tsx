import * as React from 'react';
import {
  RadioButton as CoreRadioButton,
  RadioButtonProps as CoreRadioButtonProps,
} from 'wix-ui-core/radio-button';
import { RADIOBUTTON_DATA_KEYS, RADIOBUTTON_DATA_HOOKS } from './dataHooks';
import { st, classes } from './RadioButton.st.css';
import classnames from 'classnames';

export interface RadioButtonChangeEvent
  extends React.MouseEvent<HTMLDivElement> {
  value: string;
}

export interface RadioButtonClickEvent
  extends React.MouseEvent<HTMLDivElement> {
  value: string;
}

export enum RadioButtonTheme {
  Default = 'default',
  Box = 'box',
}

export interface RadioButtonProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  name?: string;
  label: string;
  error?: boolean;
  theme?: RadioButtonTheme;
  suffix?: string;
  onChange?: CoreRadioButtonProps['onChange'];
  'data-hook'?: string;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  name: string;
  error: boolean;
  theme: RadioButtonTheme;
}

/** Radio button icon */
const radioBtnIcon = (
  <div className={st(classes.radioIcon)}>
    <div className={st(classes.innerCheck)} />
  </div>
);

/** RadioButton */
export class RadioButton extends React.Component<RadioButtonProps> {
  static displayName = 'RadioButton';
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    error: false,
    name: '',
    theme: RadioButtonTheme.Default,
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
      className,
      error,
      theme,
      suffix,
    } = this.props;
    return (
      <div
        className={st(
          classes.root,
          { checked, error, disabled, box: theme === 'box' },
          className,
        )}
        data-hook={this.props['data-hook']}
        {...this.getDataAttributes()}
      >
        <CoreRadioButton
          checked={checked}
          disabled={disabled}
          tabIndex={0}
          value={value}
          label={
            <div className={classes.labelWrapper}>
              {' '}
              <div
                data-hook={RADIOBUTTON_DATA_HOOKS.LabelWrapper}
                className={classnames(classes.label, {
                  [classes.suffixed]: suffix,
                })}
              >
                {label}
              </div>
              {suffix && (
                <div className={`${classes.label} ${classes.suffix}`}>
                  {suffix}
                </div>
              )}
            </div>
          }
          name={name}
          onChange={onChange}
          checkedIcon={radioBtnIcon}
          uncheckedIcon={radioBtnIcon}
          aria-label={label}
          className={classes.wrapper}
        />
      </div>
    );
  }
}

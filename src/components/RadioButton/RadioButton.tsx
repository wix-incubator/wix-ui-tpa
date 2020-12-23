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
  withFocusRing?: boolean;
  onChange?: CoreRadioButtonProps['onChange'];
  'data-hook'?: string;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  name: string;
  error: boolean;
  theme: RadioButtonTheme;
  withFocusRing: boolean;
}

export interface RadioButtonState {
  focused: boolean;
}

/** Radio button icon */
const radioBtnIcon = (isFocused: boolean) => (
  <div className={st(classes.radioIcon, isFocused ? classes.focused : '')}>
    <div className={st(classes.innerCheck)} />
  </div>
);

/** RadioButton */
export class RadioButton extends React.Component<
  RadioButtonProps,
  RadioButtonState
> {
  static displayName = 'RadioButton';
  static defaultProps: DefaultProps = {
    withFocusRing: false,
    checked: false,
    disabled: false,
    error: false,
    name: '',
    theme: RadioButtonTheme.Default,
  };

  state = {
    focused: false,
  };

  getDataAttributes() {
    const { checked, disabled } = this.props;
    const { focused } = this.state;
    return {
      [RADIOBUTTON_DATA_KEYS.Checked]: checked,
      [RADIOBUTTON_DATA_KEYS.Disabled]: disabled,
      [RADIOBUTTON_DATA_KEYS.Focused]: focused,
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
      withFocusRing,
    } = this.props;
    const focusedIcon =
      withFocusRing && this.state.focused && theme === RadioButtonTheme.Default;
    const focusedBox =
      withFocusRing && this.state.focused && theme === RadioButtonTheme.Box;

    return (
      <div
        className={st(
          classes.root,
          {
            checked,
            error,
            disabled,
            box: theme === 'box',
          },
          focusedBox ? classes.focused : '',
          className,
        )}
        data-hook={this.props['data-hook']}
        {...this.getDataAttributes()}
      >
        <CoreRadioButton
          data-hook={RADIOBUTTON_DATA_HOOKS.coreRadioButton}
          checked={checked}
          disabled={disabled}
          tabIndex={0}
          value={value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
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
          checkedIcon={radioBtnIcon(focusedIcon)}
          uncheckedIcon={radioBtnIcon(focusedIcon)}
          aria-label={label}
          className={classes.wrapper}
        />
      </div>
    );
  }

  onFocus = () => {
    this.setState({ focused: true });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };
}

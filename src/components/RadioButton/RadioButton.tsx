import * as React from 'react';
import {
  RadioButton as CoreRadioButton,
  RadioButtonProps as CoreRadioButtonProps,
} from 'wix-ui-core/radio-button';
import { RADIOBUTTON_DATA_KEYS, RADIOBUTTON_DATA_HOOKS } from './dataHooks';
import { st, classes } from './RadioButton.st.css';
import classnames from 'classnames';
import { TPAComponentsContext } from '../TPAComponentsConfig';

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
  label?: string;
  error?: boolean;
  theme?: RadioButtonTheme;
  suffix?: string;
  withFocusRing?: boolean;
  children?: React.ReactNode;
  onChange?: CoreRadioButtonProps['onChange'];
  'aria-label'?: string;
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
const radioBtnIcon = (isFocused: boolean, isChildren: boolean) => (
  <div
    className={classnames(classes.radioIcon, {
      [classes.withChildren]: isChildren,
      [classes.focused]: isFocused,
    })}
  >
    <div className={st(classes.innerCheck)} />
  </div>
);

/** RadioButton **/
export class RadioButton extends React.Component<
  RadioButtonProps,
  RadioButtonState
> {
  static displayName = 'RadioButton';
  static contextType = TPAComponentsContext;
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

  _getDataAttributes() {
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
      children,
    } = this.props;

    const { mobile: isMobile } = this.context;

    const focusedIcon =
      !isMobile &&
      withFocusRing &&
      this.state.focused &&
      theme === RadioButtonTheme.Default;
    const focusedBox =
      !isMobile &&
      withFocusRing &&
      this.state.focused &&
      theme === RadioButtonTheme.Box;

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
        {...this._getDataAttributes()}
      >
        <CoreRadioButton
          data-hook={RADIOBUTTON_DATA_HOOKS.coreRadioButton}
          checked={checked}
          disabled={disabled}
          tabIndex={0}
          value={value}
          onFocusByKeyboard={this._onFocus}
          onBlur={this._onBlur}
          label={this._getContent(suffix, label, children)}
          name={name}
          onChange={onChange}
          checkedIcon={radioBtnIcon(focusedIcon, !!children)}
          uncheckedIcon={radioBtnIcon(focusedIcon, !!children)}
          aria-label={this._getAriaLabel()}
          className={classnames(classes.wrapper)}
        />
      </div>
    );
  }

  _getAriaLabel = () => {
    const { label } = this.props;
    return this.props['aria-label'] ? this.props['aria-label'] : label;
  };

  _getContent = (suffix: string, label: string, children: React.ReactNode) => {
    if (children) {
      return children;
    }
    return (
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
          <div className={`${classes.label} ${classes.suffix}`}>{suffix}</div>
        )}
      </div>
    );
  };

  _onFocus = () => {
    this.setState({ focused: true });
  };

  _onBlur = () => {
    this.setState({ focused: false });
  };
}

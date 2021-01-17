import * as React from 'react';
import {
  RadioButton as CoreRadioButton,
  RadioButtonProps as CoreRadioButtonProps,
} from 'wix-ui-core/radio-button';
import { st, classes } from './Option.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';
import {
  BOX_SELECTION_DATA_ATTRIBUTES,
  BOX_SELECTION_DATA_HOOKS,
} from './dataHooks';
import classnames from 'classnames';
import { BoxSize } from './BoxSelection';

export interface OptionProps extends TPAComponentProps {
  /**
   * In order to identify the option. Used in the onChange callback.
   */
  id: string;
  /**
   * Group the different options, received from parent.
   */
  name?: string;
  /**
   * indicates that the option is selected
   */
  checked?: boolean;
  /**
   * indicates that the option is disabled
   */
  disabled?: boolean;
  /**
   * indicates that the option is unavailable
   */
  unavailable?: boolean;
  size?: BoxSize;
  /**
   * The content of the option
   */
  children?: React.ReactNode;
  /**
   * The onChange callback
   */
  onChange?: CoreRadioButtonProps['onChange'];
  withFocusRing: boolean;
  'aria-label'?: string;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  unavailable: boolean;
  withFocusRing: boolean;
}

export interface OptionState {
  focused: boolean;
}

/** Option */
export class Option extends React.Component<OptionProps, OptionState> {
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    unavailable: false,
    withFocusRing: false,
  };
  state = {
    focused: false,
  };

  _getDataAttributes() {
    const { checked, disabled, unavailable } = this.props;
    const { focused } = this.state;
    return {
      [BOX_SELECTION_DATA_ATTRIBUTES.CHECKED]: checked,
      [BOX_SELECTION_DATA_ATTRIBUTES.DISABLED]: disabled,
      [BOX_SELECTION_DATA_ATTRIBUTES.UNAVAILABLE]: unavailable,
      [BOX_SELECTION_DATA_ATTRIBUTES.FOCUSED]: focused,
    };
  }

  _onFocus = () => {
    this.setState({ focused: true });
  };

  _onBlur = () => {
    this.setState({ focused: false });
  };

  render() {
    const {
      children,
      id,
      className,
      name,
      checked,
      disabled,
      unavailable,
      ['aria-label']: ariaLabel,
      withFocusRing,
      size,
      onChange,
    } = this.props;
    const { focused } = this.state;
    console.log(focused);

    return (
      <TPAComponentsConsumer>
        {() => (
          <div
            className={st(
              classes.root,
              {
                size,
                checked,
                disabled,
                unavailable,
              },
              focused ? classes.focused : '',
              className,
            )}
            data-hook={BOX_SELECTION_DATA_HOOKS.BOX_SELECTION_OPTION_WRAPPER}
            {...this._getDataAttributes()}
          >
            <CoreRadioButton
              data-hook={BOX_SELECTION_DATA_HOOKS.BOX_SELECTION_OPTION}
              tabIndex={0}
              name={name}
              label={children}
              checked={checked}
              value={id}
              onChange={onChange}
              onFocusByKeyboard={this._onFocus}
              onBlur={this._onBlur}
              disabled={disabled}
              className={classnames(classes.wrapper)}
              aria-label={ariaLabel}
            ></CoreRadioButton>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

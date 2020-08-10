import * as React from 'react';
import { classes, st } from './RadioButtonGroup.st.css';
import { TPAComponentProps } from '../../types';
import { CheckboxGroupLayout } from '../CheckboxGroup';
import { RadioButton } from '../RadioButton';
import {CheckboxTheme} from "../RadioButton/RadioButton";

export interface RadioButtonGroupProps extends TPAComponentProps {
  label?: string | React.ReactNode;
  children?: any;
  layout?: CheckboxGroupLayout;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  'data-hook'?: string;
  defaultValue?: string;
  name:string,
  theme?: CheckboxTheme;
  onChange?(value: string): void;
}

interface DefaultProps {
  defaultValue: string;
  layout?: CheckboxGroupLayout;
}

interface State {
  count: number;
  checkedValue: string;
}

/** radio button group */
export class RadioButtonGroup extends React.Component<
  RadioButtonGroupProps,
  State
> {
  static displayName = 'RadioButtonGroup';
  static defaultProps: DefaultProps = {
    defaultValue: '',
    layout: CheckboxGroupLayout.Vertical,
  };

  state = { count: 0, checkedValue: this.props.defaultValue };

  _handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { label, layout, error, disabled, errorText, className ,theme} = this.props;
    return (
      <fieldset
        data-hook={this.props['data-hook']}
        className={st(classes.root, { layout, disabled }, className)}
      >
        {!!label && <legend className={classes.label}>{label}</legend>}

        <div  tabIndex={0} className={classes.wrapper}>
          {React.Children.map(
            this.props.children,
            (child: RadioButton, idx: number) => {
              if (!React.isValidElement(child)) {
                return null;
              }
              return (
                <>
                  {React.cloneElement(child, {
                    key: idx,
                    disabled,
                    theme,
                    checked: child.props.value === this.state.checkedValue,
                    onChange: e => {
                      this.props.onChange && this.props.onChange(e);
                      this.setState({ checkedValue: e.value });
                    },
                  })}
                </>
              );
            },
          )}
        </div>
        {!!errorText && !disabled && (
          <span className={classes.error}>{errorText}</span>
        )}
      </fieldset>
    );
  }
}

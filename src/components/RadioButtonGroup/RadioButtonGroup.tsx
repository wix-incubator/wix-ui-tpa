import * as React from 'react';
import { classes, st } from './RadioButtonGroup.st.css';
import { TPAComponentProps } from '../../types';
import { RadioButton } from '../RadioButton';
import { RadioButtonTheme } from '../RadioButton/RadioButton';

export interface RadioButtonGroupProps extends TPAComponentProps {
  label?: string | React.ReactNode;
  children?: any;
  layout?: RadioButtonGroupLayout;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  withSpacing?: boolean;
  theme?: RadioButtonTheme;
  onChange(value: string): void;
}

interface DefaultProps {
  value: string;
  layout?: RadioButtonGroupLayout;
}

export enum RadioButtonGroupLayout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

/** radio button group */
export class RadioButtonGroup extends React.Component<RadioButtonGroupProps> {
  static displayName = 'RadioButtonGroup';
  static defaultProps: DefaultProps = {
    value: '',
    layout: RadioButtonGroupLayout.Vertical,
  };

  render() {
    const {
      label,
      layout,
      error,
      disabled,
      errorText,
      className,
      theme,
      withSpacing,
    } = this.props;
    return (
      <fieldset
        data-hook={this.props['data-hook']}
        className={st(
          classes.root,
          { layout, disabled, withSpacing },
          className,
        )}
      >
        {!!label && <legend className={classes.label}>{label}</legend>}

        <div className={classes.wrapper}>
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
                    error,
                    theme,
                    checked: child.props.value === this.props.value,
                    onChange: (e) => {
                      this.props.onChange(e.value);
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

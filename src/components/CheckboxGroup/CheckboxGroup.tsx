import * as React from 'react';
import styles from './CheckboxGroup.st.css';
import { Checkbox } from '../Checkbox';

export enum Layout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
export interface CheckboxGroupProps {
  label?: string | React.ReactNode;
  className?: string;
  children?: any;
  layout?: Layout;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  'data-hook'?: string;
}

interface DefaultProps {
  layout: Layout;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  static displayName = 'CheckboxGroup';
  static defaultProps: DefaultProps = {
    layout: Layout.Vertical,
  };

  render() {
    const {
      label,
      children,
      layout,
      error,
      disabled,
      errorText,
      ...rest
    } = this.props;

    return (
      <fieldset
        data-hook={this.props['data-hook']}
        {...styles('root', { layout, disabled }, rest)}
      >
        {!!label && <legend className={styles.label}>{label}</legend>}

        <div className={styles.wrapper}>
          {React.Children.map(
            this.props.children,
            (child: Checkbox, idx: number) => {
              if (!React.isValidElement(child)) {
                return null;
              }
              return (
                <>
                  {React.cloneElement(child, {
                    key: idx,
                    error,
                    disabled,
                  })}
                  {layout === Layout.Horizontal &&
                    idx !== this.props.children.length - 1 && (
                      <span className={styles.divider} />
                    )}
                </>
              );
            },
          )}
        </div>
        {!!errorText && !disabled && (
          <span className={styles.error}>{errorText}</span>
        )}
      </fieldset>
    );
  }
}

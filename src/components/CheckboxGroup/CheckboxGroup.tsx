import * as React from 'react';
import styles from './CheckboxGroup.st.css';

export interface CheckboxGroupProps {
  label?: string | React.ReactNode;
  className?: string;
  children?: any;
  'data-hook'?: string;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  static displayName = 'CheckboxGroup';

  render() {
    const { label, children, ...rest } = this.props;

    return (
      <fieldset
        data-hook={this.props['data-hook']}
        {...styles('root', {}, rest)}
      >
        {!!label && <legend className={styles.label}>{label}</legend>}

        <div className={styles.wrapper}>{children}</div>
      </fieldset>
    );
  }
}

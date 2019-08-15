import * as React from 'react';
import { Checkbox } from '../Checkbox';
import styles from './CheckboxGroup.st.css';

export interface CheckboxGroupProps {
  groupName: string;
  className?: string;
  label?: string;
}

interface DefaultProps {
  groupName: string;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  static displayName = 'CheckboxGroup';
  static defaultProps: DefaultProps = {
    groupName: 'Checkbox group',
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <fieldset {...styles('root', {}, rest)}>
        <legend className={styles.label}>What fruits do you like?</legend>
        <Checkbox onChange={() => {}} label="First checkbox" />
        <Checkbox onChange={() => {}} label="Second checkbox" />
        <Checkbox onChange={() => {}} label="Third checkbox" />
      </fieldset>
    );
  }
}

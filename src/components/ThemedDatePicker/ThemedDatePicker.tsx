import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { Text } from '../Text';
import { Button } from '../Button';
import { st, classes } from './ThemedDatePicker.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface ThemedDatePickerProps extends TPAComponentProps {

}

interface DefaultProps {

}

/** ThemedDatePicker */
export class ThemedDatePicker extends React.Component<ThemedDatePickerProps> {
  static displayName = 'ThemedDatePicker';
  static defaultProps: DefaultProps = {};

  render() {
    const { className, } = this.props;

    return (
      <div className={st(classes.root, {}, className)} data-hook={this.props['data-hook']}>

      </div>
    );
  }
}

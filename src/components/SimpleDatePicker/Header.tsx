import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { st, classes } from './Header.st.css';

export interface HeaderProps extends TPAComponentProps {
  text: string;
}

interface DefaultProps {
  text: string;
}

/** DatePicker Header */
export class Header extends React.Component<HeaderProps> {
  static displayName = 'Header';
  static defaultProps: DefaultProps = {
    text: 'Header',
  };

  render() {
    const { className, text } = this.props;

    return (
      <div className={st(classes.root, className)}>
        <div className={classes.text}>{text}</div>
      </div>
    );
  }
}

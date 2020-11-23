import * as React from 'react';
import { st, classes } from './FocusRing.st.css';

export interface FocusRingProps extends React.PureComponent {
  active: boolean;
}

export default class extends React.PureComponent<FocusRingProps> {
  render() {
    const { active, children } = this.props;

    return <div className={st(classes.root, { active })}>{children}</div>;
  }
}

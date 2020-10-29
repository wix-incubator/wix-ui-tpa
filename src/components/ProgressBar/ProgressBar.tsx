import * as React from 'react';

import {
  LinearProgressBar as CoreProgressBar,
  LinearProgressBarProps,
} from 'wix-ui-core/linear-progress-bar';

import { TPAComponentProps } from '../../types';

import { st, classes } from './ProgressBar.st.css';

export interface ProgressBarProps
  extends TPAComponentProps,
    Omit<LinearProgressBarProps, 'error' | 'errorIcon' | 'successIcon'> {}

/** ProgressBar component based on LinearProgressBar from wix-ui-core */
export class ProgressBar extends React.PureComponent<ProgressBarProps> {
  static displayName = 'ProgressBar';
  static defaultProps: ProgressBarProps = {
    value: 0,
  };

  render() {
    return (
      <CoreProgressBar
        className={st(classes.root, {}, this.props.className)}
        {...this.props}
      />
    );
  }
}

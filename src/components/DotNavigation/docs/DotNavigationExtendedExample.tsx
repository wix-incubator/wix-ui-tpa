import * as React from 'react';
import { DotNavigation, DotNavigationProps } from '../DotNavigation';
import { classes } from './DotNavigationExtendedExample.st.css';

interface DotNavigationExtendedExampleState {
  currentIndex: number;
}

export class DotNavigationExtendedExample extends React.Component<
  DotNavigationProps,
  DotNavigationExtendedExampleState
> {
  state = {
    currentIndex: 0,
  };

  changeCurrentIndex = (currentIndex: number) =>
    this.setState({
      currentIndex,
    });

  render = () => (
    <DotNavigation
      {...this.props}
      currentIndex={this.state.currentIndex}
      onSelect={this.changeCurrentIndex}
      className={classes.root}
    />
  );
}

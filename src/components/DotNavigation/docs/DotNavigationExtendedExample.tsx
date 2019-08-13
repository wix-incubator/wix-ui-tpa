import * as React from 'react';
import extendedStyles from './DotNavigationExtendedExample.st.css';
import { DotNavigation, DotNavigationProps } from '../DotNavigation';

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
      {...extendedStyles('root')}
    />
  );
}

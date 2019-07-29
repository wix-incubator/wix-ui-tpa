import * as React from 'react';
import extendedStyles from './DotNavigationExtendedExample.st.css';
import { DotNavigation, DotNavigationProps } from '../DotNavigation';

export class DotNavigationExtendedExample extends React.Component<
  DotNavigationProps
> {
  render = () => <DotNavigation {...this.props} {...extendedStyles('root')} />;
}

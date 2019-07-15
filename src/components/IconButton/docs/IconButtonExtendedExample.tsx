import * as React from 'react';
import extendedStyles from './IconButtonExtendedExample.st.css';
import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';
import { IconButton } from '../IconButton';

interface State {
  checked: boolean;
  counter: number;
}

export class IconButtonExtendedExample extends React.Component<{}, State> {
  render = () => (
    <IconButton
      icon={<StarIcon />}
      {...this.props}
      {...extendedStyles('root', {}, this.props)}
    />
  );
}

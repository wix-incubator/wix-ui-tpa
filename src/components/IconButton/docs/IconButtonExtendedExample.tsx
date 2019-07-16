import * as React from 'react';
import extendedStyles from './IconButtonExtendedExample.st.css';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton } from '../IconButton';

export class IconButtonExtendedExample extends React.Component {
  render = () => (
    <IconButton
      icon={<ShareIcon />}
      {...this.props}
      {...extendedStyles('root', {}, this.props)}
    />
  );
}

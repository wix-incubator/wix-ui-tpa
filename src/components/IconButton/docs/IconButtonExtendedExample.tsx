import * as React from 'react';
import { classes } from './IconButtonExtendedExample.st.css';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton, Skins } from '../IconButton';

export class IconButtonExtendedExample extends React.Component {
  render = () => (
    <div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          {...this.props}
          className={classes.root}
        />{' '}
        Skin 'line'
      </div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          skin={Skins.Full}
          {...this.props}
          className={classes.root}
        />{' '}
        Skin 'full'
      </div>
    </div>
  );
}

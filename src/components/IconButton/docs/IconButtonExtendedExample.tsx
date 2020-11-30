import * as React from 'react';
import { classes } from './IconButtonExtendedExample.st.css';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton, Skins } from '../IconButton';

export class IconButtonExtendedExample extends React.Component {
  render = () => (
    <div>
      <h3>
        Override the style params per skin - start with a skin and change what
        you want - this is common for a component with predefined variations
      </h3>
      <div>
        <IconButton
          icon={<ShareIcon />}
          skin={Skins.Line}
          className={classes.mixSkinLine}
        />{' '}
        Skin 'line'
      </div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          skin={Skins.Full}
          className={classes.mixSkinFull}
        />{' '}
        Skin 'full'
      </div>

      <h3>*Deprecated* - Override the style params in the entire css file</h3>
      <div>
        <IconButton
          icon={<ShareIcon />}
          skin={Skins.Line}
          className={classes.mixAll}
        />{' '}
        Skin 'line'
      </div>
    </div>
  );
}

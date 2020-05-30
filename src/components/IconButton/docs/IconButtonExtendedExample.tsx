import * as React from 'react';
import { st, classes } from './IconButtonExtendedExample.st.css';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton, Skins } from '../IconButton';

export class IconButtonExtendedExample extends React.Component {
  render = () => (
    <div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          {...this.props}
          className={st(classes.root)}
        />{' '}
        Skin 'line'
      </div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          skin={Skins.Full}
          {...this.props}
          className={st(classes.root)}
        />{' '}
        Skin 'full'
      </div>
    </div>
  );
}

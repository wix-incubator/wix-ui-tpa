import * as React from 'react';
import extendedStyles from './IconButtonExtendedExample.st.css';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { IconButton, Skins } from '../IconButton';

export class IconButtonExtendedExample extends React.Component {
  render = () => (
    <div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          {...this.props}
          {...extendedStyles('root', {}, this.props)}
        />{' '}
        Skin 'line'
      </div>
      <div>
        <IconButton
          icon={<ShareIcon />}
          skin={Skins.Full}
          {...this.props}
          {...extendedStyles('root', {}, this.props)}
        />{' '}
        Skin 'full'
      </div>
    </div>
  );
}

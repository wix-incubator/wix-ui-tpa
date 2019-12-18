import * as React from 'react';
import { ShareButton } from '../';
import styles from './ShareButtonWiringExample.st.css';
import { IconButton } from '../../IconButton';
import { Share } from '../../../assets/icons';

export const ShareButtonWiringExample = () => {
  return (
    <ShareButton
      title="Share title"
      url="https://wix.com"
      renderButton={props => <IconButton {...props} icon={<Share />} />}
      className={styles.component}
      onClick={sharePromise => {
        if (!sharePromise) {
          alert('share clicked');
        }
      }}
    />
  );
};

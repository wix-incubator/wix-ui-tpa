import * as React from 'react';
import { ShareButton } from '../';
import styles from './ShareButtonWiringExample.st.css';
import { Share } from '../../../assets/icons';

export const ShareButtonWiringExample = () => {
  return (
    <ShareButton
      title="Share title"
      url="https://wix.com"
      prefixIcon={<Share />}
      onClick={sharePromise => {
        if (!sharePromise) {
          alert('share clicked');
        }
      }}
    >
      Share
    </ShareButton>
  );
};

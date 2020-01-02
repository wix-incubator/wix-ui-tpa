import * as React from 'react';
import { ShareButton } from '../';

export const ShareButtonWiringExample = () => {
  return (
    <ShareButton
      shareData={{
        title: 'Share title',
        url: 'https://wix.com',
      }}
      onClick={() => {}}
      withIcon
      text="Share"
    />
  );
};

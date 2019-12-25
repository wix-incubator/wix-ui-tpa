import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ShareButton } from './';
import { ShareButtonProps } from './ShareButton';
import { Omit } from '../../types';

const VisualShareButton = (
  props: Omit<ShareButtonProps, 'shareData' | 'onClick'>,
) => (
  <ShareButton
    shareData={{
      title: 'Share title',
      url: 'https://wix.com',
    }}
    onClick={() => {}}
    {...props}
  />
);

visualize('ShareButton', () => {
  story('render', () => {
    snap('icon', <VisualShareButton withIcon />);
    snap('text', <VisualShareButton text="Share" />);
    snap('text+icon', <VisualShareButton text="Share" withIcon />);
  });
});

import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { CopyUrlButton } from './';
import { CopyUrlButtonProps } from './CopyUrlButton';

const CopyUrlButtonVisual = ({
  socialBarTheme,
}: Pick<CopyUrlButtonProps, 'socialBarTheme'>) => (
  <CopyUrlButton
    url="wix.com"
    tooltipText="Copy link"
    successText="Link Copied"
    socialBarTheme={socialBarTheme}
  />
);

visualize('CopyUrlButton', () => {
  story('render', () => {
    snap('light', <CopyUrlButtonVisual socialBarTheme="light" />);
    snap('dark', <CopyUrlButtonVisual socialBarTheme="dark" />);
  });
});

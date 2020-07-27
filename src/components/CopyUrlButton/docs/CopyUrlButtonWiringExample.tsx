import * as React from 'react';
import { CopyUrlButton } from '../';
import { classes } from './CopyUrlButtonWiringExample.st.css';

export const CopyUrlButtonWiringExample = () => {
  return (
    <CopyUrlButton
      url="wix.com"
      tooltipText="Copy link"
      successText="Link Copied"
      className={classes.root}
    />
  );
};

import * as React from 'react';
import { CopyUrlButton } from '../';
import styles from './CopyUrlButtonWiringExample.st.css';

export const CopyUrlButtonWiringExample = () => {
  return (
    <CopyUrlButton
      url="wix.com"
      tooltipText="Copy link"
      successText="Link Copied"
      className={styles.component}
    />
  );
};

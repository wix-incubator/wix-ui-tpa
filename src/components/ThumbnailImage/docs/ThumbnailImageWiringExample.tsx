import * as React from 'react';
import { ThumbnailImage } from '..';
import { classes } from './ThumbnailImageWiringExample.st.css';

export const ThumbnailImageWiringExample = () => {
  return (
    <ThumbnailImage
      src="c5f754_f4ccb2e3ed75479dbfd55e02ef9c47e8~mv2.png"
      width={300}
      height={300}
      alt="One narrow vase with two wide vases"
      className={classes.root}
    />
  );
};

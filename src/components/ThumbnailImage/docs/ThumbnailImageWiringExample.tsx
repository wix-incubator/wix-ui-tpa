import * as React from 'react';
import { ThumbnailImage } from '..';
import { classes } from './ThumbnailImageWiringExample.st.css';

export const ThumbnailImageWiringExample = () => {
  return (
    <ThumbnailImage
      src="c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png"
      width={820}
      height={312}
      alt="One narrow vase with two wide vases"
      className={classes.root}
    />
  );
};

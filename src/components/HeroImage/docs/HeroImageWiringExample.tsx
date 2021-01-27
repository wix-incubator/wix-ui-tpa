import * as React from 'react';
import { HeroImage } from '..';
import { classes } from './HeroImageWiringExample.st.css';

export const HeroImageWiringExample = () => {
  return (
    <HeroImage
      src="c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png"
      width={820}
      height={312}
      alt="One narrow vase with two wide vases"
      className={classes.root}
    />
  );
};

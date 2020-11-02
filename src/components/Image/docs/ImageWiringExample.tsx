import * as React from 'react';
import { Image } from '../';
import { classes } from './ImageWiringExample.st.css';

export const ImageWiringExample = () => {
  return <Image src="something" className={classes.component} />;
};

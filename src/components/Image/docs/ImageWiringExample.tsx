import * as React from 'react';
import { Image } from '..';
import { classes } from './ImageWiringExample.st.css';

export const ImageWiringExample = () => {
  return (
    <Image
      src="c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg"
      width={200}
      height={200}
      alt="Garfield smiles and puts his hand over chest"
      className={classes.root}
    />
  );
};

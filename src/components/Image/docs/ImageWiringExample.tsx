import * as React from 'react';
import { Image } from '../';
import { classes } from './ImageWiringExample.st.css';

export const ImageWiringExample = () => {
  return (
    <Image
      src="https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
      className={classes.component}
    />
  );
};

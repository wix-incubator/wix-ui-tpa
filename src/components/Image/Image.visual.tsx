import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Image } from './';

visualize('Image', () => {
  story('simple example', () => {
    // snap('default props', <Image />);
    snap('custom src', <Image src={'something'} />);
  });
});

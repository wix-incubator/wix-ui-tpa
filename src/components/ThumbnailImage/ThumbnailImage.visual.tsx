import * as React from 'react';
import { snap, visualize } from 'storybook-snapper';
import { ThumbnailImage } from '.';

const sampleSource = 'c5f754_f4ccb2e3ed75479dbfd55e02ef9c47e8~mv2.png';
const sampleDimensions = { width: 300, height: 300 };

visualize('ThumbnailImage', () => {
  snap('default', (done) => (
    <ThumbnailImage src={sampleSource} {...sampleDimensions} onLoad={done} />
  ));
});

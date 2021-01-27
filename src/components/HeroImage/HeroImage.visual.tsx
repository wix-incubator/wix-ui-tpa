import * as React from 'react';
import { snap, visualize } from 'storybook-snapper';
import { HeroImage } from '.';

const sampleSource = 'c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png';
const sampleDimensions = { width: 800, height: 300 };

visualize('HeroImage', () => {
  snap('default', (done) => (
    <HeroImage src={sampleSource} {...sampleDimensions} onLoad={done} />
  ));
});

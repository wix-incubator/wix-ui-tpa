import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { Image } from './';

visualize('Image', () => {
  story('render', () => {
    snap(
      'default',
      <Image src="https://static.wixstatic.com/media/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg/v1/fill/w_420,h_350,al_c,lg_1,q_80/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.webp" />,
    );
    snap(
      'with width & height',
      <Image
        src="https://static.wixstatic.com/media/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg/v1/fill/w_420,h_350,al_c,lg_1,q_80/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.webp"
        width={200}
        height={200}
      />,
    );
    snap(
      'with alt',
      <Image alt="Garfield smiles and puts his hand over chest" />,
    );
    snap(
      'with mediaItem',
      <Image
        mediaItem={{
          uri: 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg',
          width: 400,
          height: 400,
        }}
      />,
    );
  });
});

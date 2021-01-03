import * as React from 'react';
import { visualize, snap } from 'storybook-snapper';

visualize('temporary test', () => {
  snap(
    'to break',
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'royalblue',
        color: 'lavenderblush',
      }}
    >
      hello world
    </div>,
  );
});

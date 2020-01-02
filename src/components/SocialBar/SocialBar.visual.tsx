import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { SocialBarWiringExample } from './docs/SocialBarWiringExample';

visualize('SocialBar', () => {
  story('render', () => {
    snap('default', <SocialBarWiringExample />);
  });
});

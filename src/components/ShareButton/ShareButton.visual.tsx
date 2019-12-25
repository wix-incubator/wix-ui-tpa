import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ShareButton } from './';

visualize('ShareButton', () => {
  story('render', () => {
    snap(
      'default',
      //tslint:disable
      <ShareButton
        title="Share title"
        url="https://wix.com"
        onClick={() => {}}
        children="Share"
      />,
      //tslint:enable
    );
  });
});

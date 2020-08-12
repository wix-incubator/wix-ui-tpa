import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Modal } from './';

visualize('Modal', () => {
  story('simple', () => {
    snap('default props', <Modal />);
    snap('custom buttonText', <Modal buttonText={'Some custom text'} />);
  });
});

import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Modal } from './';

visualize('Modal', () => {
  story('simple', () => {
    snap('default props', <Modal isOpen rootElement={document.body} />);
  });
});

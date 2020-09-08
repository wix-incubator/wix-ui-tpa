import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Modal } from './';

visualize('Modal', () => {
  story('simple', () => {
    const content = (
      <Modal isOpen>
        <p>Inner Content.</p>
      </Modal>
    );

    snap('default props', content);
  });
});

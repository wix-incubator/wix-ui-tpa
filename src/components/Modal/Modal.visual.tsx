import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Modal } from './';

visualize('Modal', () => {
  story('simple', () => {
    const content = (
      <Modal isOpen>
        <div
          style={{
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
            background: '#fff',
          }}
        >
          <p>Inner Content.</p>
        </div>
      </Modal>
    );

    snap('default props', content);
  });
});

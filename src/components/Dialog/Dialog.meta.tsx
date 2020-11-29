import { Dialog, DialogProps } from '.';
import Registry from '@ui-autotools/registry';
import * as React from 'react';

const DialogMetadata = Registry.getComponentMetadata(Dialog);
DialogMetadata.nonReactStrictModeCompliant = true;

const DialogContent = () => (
  <div style={{ backgroundColor: 'white' }}>
    <h2 id="dialog4_label" className="dialog_label">
      End of the Road!
    </h2>
    <p id="dialog4_desc" className="dialog_desc">
      You activated a fake link or button that goes nowhere! The link or button
      is present for demonstration purposes only.
    </p>
  </div>
);

DialogMetadata.addSim({
  title: 'render',
  props: {
    isOpen: true,
    children: <DialogContent />,
    'aria-label': 'Dialog',
    closeButtonAriaLabel: 'Close Button',
    contentClassName: 'content',
  } as DialogProps,
});

DialogMetadata.addSim({
  title: 'Manual Focus',
  props: {
    isOpen: true,
    children: (
      <div style={{ backgroundColor: 'white' }}>This is the content!</div>
    ),
    manualFocus: true,
    closeButtonRef: React.createRef<HTMLButtonElement>(),
    'aria-label': 'Dialog',
    closeButtonAriaLabel: 'Close Button',
  } as DialogProps,
});

DialogMetadata.addSim({
  title: 'A11Y',
  props: {
    isOpen: true,
    children: <DialogContent />,
    'aria-labelledby': 'dialog4_label',
    'aria-describedby': 'dialog4_desc',
    closeButtonAriaLabel: 'Close Button',
  } as DialogProps,
});

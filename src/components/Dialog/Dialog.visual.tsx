import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Dialog } from './';
import { Text, TYPOGRAPHY } from '../Text';
import { Button, PRIORITY } from '../Button';
// import { setDarkPalette } from '../../test/visualTestUtils';

const DialogWithContent = (props) => (
  <Dialog isOpen wiredToSiteColors={props.wired}>
    <div className="content" style={{ textAlign: 'center' }}>
      <Text typography={TYPOGRAPHY.largeTitle}>Are You Sure?</Text>
      <div
        className="text-container"
        style={{ marginTop: '24px', marginBottom: '36px' }}
      >
        <Text typography={TYPOGRAPHY.listText} tagName="div">
          <div>Do you really want to delete the selected files?</div>
          <div>Once removed, cannot be undone.</div>
        </Text>
      </div>
      <Button
        upgrade
        priority={PRIORITY.basicSecondary}
        style={{ marginLeft: '10px' }}
      >
        SECONDARY
      </Button>
      <Button upgrade style={{ marginLeft: '10px' }}>
        PRIMARY
      </Button>
    </div>
  </Dialog>
);

visualize('Dialog', () => {
  story('simple', () => {
    snap('default props', <Dialog isOpen />);
    snap('Dialog with some content', <DialogWithContent />);
  });

  story('Wired to palette', () => {
    snap('Dialog with some content', () => {
      return <DialogWithContent wired />;
    });

    // TODO uncomment when we'll support dark theme tests
    // snap('with dark theme', () => {
    //   setDarkPalette();
    //
    //   return <DialogWithContent wired />;
    // });
  });
});

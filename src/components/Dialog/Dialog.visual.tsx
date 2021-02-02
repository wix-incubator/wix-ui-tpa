import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Dialog } from './';
import { Text, TYPOGRAPHY } from '../Text';
import { Button, PRIORITY } from '../Button';
import { TPAComponentsWrapper } from '../../test/utils';
// import { setDarkPalette } from '../../test/visualTestUtils';

const DialogWithContent = (props) => (
  <Dialog isOpen {...props}>
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

const runDesktopSnapshots = (isRtl) => {
  story('Basic', () => {
    snap(
      `Desktop with default props  ${isRtl ? 'rtl' : ''}`,
      TPAComponentsWrapper({ mobile: false, rtl: isRtl })(<Dialog isOpen />),
    );
    snap(
      `Desktop Dialog with some content  ${isRtl ? 'rtl' : ''}`,
      TPAComponentsWrapper({ mobile: false, rtl: isRtl })(
        <DialogWithContent />,
      ),
    );
  });
};

const runMobileSnapshots = (isRtl) => {
  story('Basic', () => {
    snap(
      `Mobile with default props  ${isRtl ? 'rtl' : ''}`,
      TPAComponentsWrapper({ mobile: true, rtl: isRtl })(<DialogWithContent />),
    );
    snap(
      `Mobile with not fullscreen version  ${isRtl ? 'rtl' : ''}`,
      TPAComponentsWrapper({ mobile: true, rtl: isRtl })(
        <DialogWithContent notFullscreenOnMobile />,
      ),
    );
  });
};

visualize('Dialog', () => {
  [false, true].map((value) => runMobileSnapshots(value));
  [false, true].map((value) => runDesktopSnapshots(value));

  story('Wired to palette', () => {
    snap('Dialog with some content', () => {
      return <DialogWithContent wiredToSiteColors />;
    });

    // TODO uncomment when we'll support dark theme tests
    // snap('with dark theme', () => {
    //   setDarkPalette();
    //
    //   return <DialogWithContent wired />;
    // });
  });
});

import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Dialog } from './';
import { Text, TYPOGRAPHY } from '../Text';
import { Button, PRIORITY } from '../Button';
import { VisualTestWrapper } from '../../test/visualTestWrapper';
// import { setDarkPalette } from '../../test/visualTestUtils';

const MobileDialogWithContent = props => (
  <Dialog isOpen {...props}>
    <div className="content" style={{ textAlign: 'center' }}>
      <Text typography={TYPOGRAPHY.largeTitle} tagName="div">
        Discard draft?
      </Text>
      <div
        className="text-container"
        style={{ marginTop: '16px', marginBottom: '32px' }}
      >
        <Text typography={TYPOGRAPHY.runningText} tagName="div">
          Are You Sure you want to discard the changes you made?
        </Text>
      </div>
      <div
        className="primary-btn-container"
        style={{ marginBottom: '8px' }}
      >
        <Button
          upgrade
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          PRIMARY
        </Button>
      </div>
      <Button
        upgrade
        priority={PRIORITY.basicSecondary}
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        SECONDARY
      </Button>
    </div>
  </Dialog>
);

const DialogWithContent = props => (
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

const runDesktopSnapshots = isRtl => {
  story('Basic', () => {
    snap(`Desktop with default props  ${isRtl ? 'rtl' : ''}`, () => (
      <VisualTestWrapper isRtl={isRtl} isMobile={false}>
        <Dialog isOpen />
      </VisualTestWrapper>
    ));
    snap(
      `Desktop Dialog with some content  ${isRtl ? 'rtl' : ''}`,
      () => (
        <VisualTestWrapper isRtl={isRtl} isMobile={false}>
          <DialogWithContent />
        </VisualTestWrapper>
      ),
    );
  });
};

const runMobileSnapshots = isRtl => {
  story('Basic', () => {
    snap(`Mobile with default props  ${isRtl ? 'rtl' : ''}`, () => (
      <VisualTestWrapper isRtl={isRtl} isMobile>
        <MobileDialogWithContent />
      </VisualTestWrapper>
    ));
    snap(
      `Mobile with not fullscreen version  ${isRtl ? 'rtl' : ''}`,
      () => (
        <VisualTestWrapper isRtl={isRtl} isMobile>
          <MobileDialogWithContent notFullscreenOnMobile />
        </VisualTestWrapper>
      ),
    );
  });
};

visualize('Dialog', () => {
  [false, true].map(value => runMobileSnapshots(value));
  [false, true].map(value => runDesktopSnapshots(value));

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

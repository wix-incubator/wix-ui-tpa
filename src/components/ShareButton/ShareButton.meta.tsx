import { ShareButton } from '.';
import Registry from '@ui-autotools/registry';

const ShareButtonMetadata = Registry.getComponentMetadata(ShareButton);
ShareButtonMetadata.nonReactStrictModeCompliant = true;

ShareButtonMetadata.addSim({
  title: 'render',
  props: {
    shareData: {
      title: 'Share title',
      url: 'https://wix.com',
    },
    onClick: (sharePromise) => {
      if (!sharePromise) {
        alert('share clicked');
      }
    },
    withIcon: true,
    text: 'Share',
  },
});

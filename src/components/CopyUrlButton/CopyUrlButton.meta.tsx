import { CopyUrlButton } from '.';
import Registry from '@ui-autotools/registry';

const CopyUrlButtonMetadata = Registry.getComponentMetadata(CopyUrlButton);
CopyUrlButtonMetadata.nonReactStrictModeCompliant = true;

CopyUrlButtonMetadata.addSim({
  title: 'render',
  props: {
    url: 'wix.com',
    tooltipText: 'Copy link',
    successText: 'Link Copied',
    socialBarTheme: 'light',
    //@ts-ignore
    'aria-label': 'copy url',
  },
});

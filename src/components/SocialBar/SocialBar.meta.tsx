import { SocialBar } from '.';
import Registry from '@ui-autotools/registry';

const SocialBarMetadata = Registry.getComponentMetadata(SocialBar);
SocialBarMetadata.nonReactStrictModeCompliant = true;

SocialBarMetadata.addSim({
  title: 'render',
  props: {
    theme: 'light',
  },
});

import { AvatarGroup } from '.';
import Registry from '@ui-autotools/registry';

const AvatarGroupMetadata = Registry.getComponentMetadata(AvatarGroup);
AvatarGroupMetadata.nonReactStrictModeCompliant = true;

AvatarGroupMetadata.addSim({
  title: 'render',
  props: {
    items: [],
  },
});

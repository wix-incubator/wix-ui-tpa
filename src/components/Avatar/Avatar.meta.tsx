import { Avatar } from '.';
import Registry from '@ui-autotools/registry';

const AvatarMetadata = Registry.getComponentMetadata(Avatar);
AvatarMetadata.nonReactStrictModeCompliant = true;

AvatarMetadata.addSim({
  title: 'render',
  props: {

  },
});

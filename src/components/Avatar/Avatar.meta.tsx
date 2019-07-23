import { Avatar, AvatarSize } from '..';
import Registry from '@ui-autotools/registry';

const AvatarMetadata = Registry.getComponentMetadata(Avatar);
AvatarMetadata.nonReactStrictModeCompliant = true;

AvatarMetadata.addSim({
  title: 'render anonymous',
  props: {},
});

AvatarMetadata.addSim({
  title: 'render small with image',
  props: {
    size: AvatarSize.small,
    name: 'John',
  },
});

AvatarMetadata.addSim({
  title: 'render medium with image',
  props: {
    size: AvatarSize.medium,
    name: 'John',
    src: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
});

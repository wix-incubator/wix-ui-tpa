import { SIZE, SKIN, Tag, TagProps } from '.';
import Registry from '@ui-autotools/registry';

const TagMetadata = Registry.getComponentMetadata(Tag);
TagMetadata.nonReactStrictModeCompliant = true;

TagMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
    size: SIZE.small,
    skin: SKIN.solid,
  } as TagProps,
});

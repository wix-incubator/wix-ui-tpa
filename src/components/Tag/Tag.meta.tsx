import { SIZE, SKIN, Tag, TagProps } from '.';
import Registry from '@ui-autotools/registry';

const TagMetadata = Registry.getComponentMetadata(Tag);
TagMetadata.nonReactStrictModeCompliant = true;
TagMetadata.nonA11yCompliant = true;

TagMetadata.addSim({
  title: 'render',
  props: {
    size: SIZE.small,
    skin: SKIN.solid,
    children: 'Tag Name',
  } as TagProps,
});

import { Tags } from '.';
import Registry from '@ui-autotools/registry';

const TagsMetadata = Registry.getComponentMetadata(Tags);
TagsMetadata.nonReactStrictModeCompliant = true;

TagsMetadata.addSim({
  title: 'render',
  props: {
    items: [
      { title: 'first tag', value: 'first', checked: true },
      { title: 'second tag', value: 'second', checked: false },
    ],
    onClick: () => {},
  },
});

import { Tags } from '.';
import Registry from '@ui-autotools/registry';

const TagsMetadata = Registry.getComponentMetadata(Tags);
TagsMetadata.nonReactStrictModeCompliant = true;

TagsMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});

import { CopyUrlButton } from '.';
import Registry from '@ui-autotools/registry';

const CopyUrlButtonMetadata = Registry.getComponentMetadata(CopyUrlButton);
CopyUrlButtonMetadata.nonReactStrictModeCompliant = true;

CopyUrlButtonMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

import { NewCard } from '.';
import Registry from '@ui-autotools/registry';

const NewCardMetadata = Registry.getComponentMetadata(NewCard);
NewCardMetadata.nonReactStrictModeCompliant = true;

NewCardMetadata.addSim({
  title: 'render',
  props: {},
});

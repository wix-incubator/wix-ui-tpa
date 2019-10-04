import { NewCardWiringExample } from './docs/NewCardWiringExample';
import Registry from '@ui-autotools/registry';

const NewCardMetadata = Registry.getComponentMetadata(NewCardWiringExample);
NewCardMetadata.nonReactStrictModeCompliant = true;

NewCardMetadata.addSim({
  title: 'render',
  props: {},
});

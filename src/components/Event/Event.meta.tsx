import { Event } from '.';
import Registry from '@ui-autotools/registry';

const EventMetadata = Registry.getComponentMetadata(Event);
EventMetadata.nonReactStrictModeCompliant = true;

EventMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});

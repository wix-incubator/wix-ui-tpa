import { Calendar } from '.';
import Registry from '@ui-autotools/registry';

const CalendarMetadata = Registry.getComponentMetadata(Calendar);
CalendarMetadata.nonReactStrictModeCompliant = true;

CalendarMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

import { CalendarCell } from '.';
import Registry from '@ui-autotools/registry';

const CalendarCellMetadata = Registry.getComponentMetadata(CalendarCell);
CalendarCellMetadata.nonReactStrictModeCompliant = true;

CalendarCellMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});

import { CalendarCell } from '.';
import Registry from '@ui-autotools/registry';

const CalendarCellMetadata = Registry.getComponentMetadata(CalendarCell);
CalendarCellMetadata.nonReactStrictModeCompliant = true;

CalendarCellMetadata.addSim({
  title: 'defalut',
  props: {
    title: '13',
  },
});

CalendarCellMetadata.addSim({
  title: 'bold title',
  props: {
    title: '13',
    boldTitle: true,
  },
});

CalendarCellMetadata.addSim({
  title: 'bold background',
  props: {
    title: '13',
    boldBackground: true,
  },
});

CalendarCellMetadata.addSim({
  title: 'current day',
  props: {
    title: '13',
    current: true,
  },
});

CalendarCellMetadata.addSim({
  title: 'stretch',
  props: {
    title: '13',
    stretchable: true,
  },
});

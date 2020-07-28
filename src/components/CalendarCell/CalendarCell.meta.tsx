import { CalendarCell, Alignment, Times } from '.';
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
  title: 'current',
  props: {
    title: '13',
    current: true,
  },
});

CalendarCellMetadata.addSim({
  title: 'future date',
  props: {
    title: '13',
    timeType: Times.futureDate,
  },
});

CalendarCellMetadata.addSim({
  title: 'past date',
  props: {
    title: '13',
    timeType: Times.pastDate,
  },
});

CalendarCellMetadata.addSim({
  title: 'today',
  props: {
    title: '13',
    timeType: Times.today,
  },
});

CalendarCellMetadata.addSim({
  title: 'stretch',
  props: {
    title: '13',
    stretchable: true,
  },
});

CalendarCellMetadata.addSim({
  title: 'center',
  props: {
    title: '13',
    alignment: Alignment.center,
  },
});

CalendarCellMetadata.addSim({
  title: 'right',
  props: {
    title: '13',
    alignment: Alignment.right,
  },
});

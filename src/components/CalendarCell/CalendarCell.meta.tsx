import { CalendarCell, Times } from '.';
import Registry from '@ui-autotools/registry';

const CalendarCellMetadata = Registry.getComponentMetadata(CalendarCell);
CalendarCellMetadata.nonReactStrictModeCompliant = true;

CalendarCellMetadata.addSim({
  title: 'defalut',
  props: {
    time: "13",
  },
});

CalendarCellMetadata.addSim({
  title: 'previous month',
  props: {
    time: "13",
    timeType: Times.previousMonth
  },
});

CalendarCellMetadata.addSim({
  title: 'previous days',
  props: {
    time: "13",
    timeType: Times.previousDays
  },
});

CalendarCellMetadata.addSim({
  title: 'current day',
  props: {
    time: "13",
    timeType: Times.currentDay
  },
});

CalendarCellMetadata.addSim({
  title: 'next month',
  props: {
    time: "13",
    timeType: Times.nextMonth
  },
});

CalendarCellMetadata.addSim({
  title: 'stretch',
  props: {
    time: "13",
    isStretchAble: true
  },
});

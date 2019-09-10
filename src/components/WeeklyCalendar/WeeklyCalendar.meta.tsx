import { WeeklyCalendar } from '.';
import Registry from '@ui-autotools/registry';

const WeeklyCalendarMetadata = Registry.getComponentMetadata(WeeklyCalendar);
WeeklyCalendarMetadata.nonReactStrictModeCompliant = true;

WeeklyCalendarMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

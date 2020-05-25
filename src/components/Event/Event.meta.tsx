import { Event } from '.';
import Registry from '@ui-autotools/registry';

const EventMetadata = Registry.getComponentMetadata(Event);
EventMetadata.nonReactStrictModeCompliant = true;

const defaultProps = {
  time: '23:23',
  title: 'movie',
};

EventMetadata.addSim({
  title: 'default',
  props: {
    ...defaultProps,
  },
});

EventMetadata.addSim({
  title: 'time not shown',
  props: {
    ...defaultProps,
    isTimeShown: false,
  },
});

EventMetadata.addSim({
  title: 'selected',
  props: {
    ...defaultProps,
    isSelected: true,
  },
});

EventMetadata.addSim({
  title: 'multiday',
  props: {
    ...defaultProps,
    isMultiday: true,
  },
});

EventMetadata.addSim({
  title: 'right to left',
  props: {
    ...defaultProps,
    isRightToLeft: true,
  },
});

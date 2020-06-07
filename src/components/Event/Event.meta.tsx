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
    showTime: false,
  },
});

EventMetadata.addSim({
  title: 'selected',
  props: {
    ...defaultProps,
    selected: true,
  },
});

EventMetadata.addSim({
  title: 'multiday',
  props: {
    ...defaultProps,
    multiday: true,
  },
});

EventMetadata.addSim({
  title: 'right to left',
  props: {
    ...defaultProps,
  },
});

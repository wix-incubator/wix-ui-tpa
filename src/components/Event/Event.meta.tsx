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
  title: 'fullday',
  props: {
    ...defaultProps,
    fullday: true,
  },
});

EventMetadata.addSim({
  title: 'without time',
  props: {
    ...defaultProps,
    showTime: false,
  },
});

EventMetadata.addSim({
  title: 'clickable',
  props: {
    ...defaultProps,
    onClick: () => {},
  },
});

EventMetadata.addSim({
  title: 'disabled',
  props: {
    ...defaultProps,
    onClick: () => {},
    disabled: true,
  },
});

EventMetadata.addSim({
  title: 'aria-has-popup',
  props: {
    ...defaultProps,
    onClick: () => {},
    'aria-has-popup': true,
  },
});

EventMetadata.addSim({
  title: 'aria-expanded',
  props: {
    ...defaultProps,
    onClick: () => {},
    'aria-expanded': true,
  },
});

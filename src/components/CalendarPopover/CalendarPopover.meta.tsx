import { CalendarPopover, Sides } from '.';
import Registry from '@ui-autotools/registry';

const CalendarPopoverMetadata = Registry.getComponentMetadata(CalendarPopover);
CalendarPopoverMetadata.nonReactStrictModeCompliant = true;

const onClose = () => {};

CalendarPopoverMetadata.addSim({
  title: 'render',
  props: {
    onClose,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with left arrow',
  props: {
    onClose,
    withArrow: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with title',
  props: {
    onClose,
    title: 'title',
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with shadow',
  props: {
    onClose,
    withShadow: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with right arrow',
  props: {
    onClose,
    arrowSide: Sides.Right,
    withArrow: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with arrow top',
  props: {
    onClose,
    arrowTop: 66,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'shown',
  props: {
    onClose,
    isShown: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'animated',
  props: {
    onClose,
    animated: true,
  },
});

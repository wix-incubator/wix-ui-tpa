import { CalendarPopover, Sides } from '.';
import Registry from '@ui-autotools/registry';

const CalendarPopoverMetadata = Registry.getComponentMetadata(CalendarPopover);
CalendarPopoverMetadata.nonReactStrictModeCompliant = true;

const defaultProps = {
  onClose: () => {},
  closeAriaLabel: 'close',
};

CalendarPopoverMetadata.addSim({
  title: 'render',
  props: {
    ...defaultProps,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with left arrow',
  props: {
    ...defaultProps,
    withArrow: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with title',
  props: {
    ...defaultProps,
    title: 'title',
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with shadow',
  props: {
    ...defaultProps,
    withShadow: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with right arrow',
  props: {
    ...defaultProps,
    arrowSide: Sides.Right,
    withArrow: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'with arrow top',
  props: {
    ...defaultProps,
    arrowTop: 66,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'shown',
  props: {
    ...defaultProps,
    isShown: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'animated',
  props: {
    ...defaultProps,
    animated: true,
  },
});

CalendarPopoverMetadata.addSim({
  title: 'auto focused',
  props: {
    ...defaultProps,
    manualFocus: true,
  },
});

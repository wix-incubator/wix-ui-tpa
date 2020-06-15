import { Popover, Sides } from '.';
import Registry from '@ui-autotools/registry';

const PopoverMetadata = Registry.getComponentMetadata(Popover);
PopoverMetadata.nonReactStrictModeCompliant = true;

const onClose = () => {};

PopoverMetadata.addSim({
  title: 'render',
  props: {
    onClose,
  },
});

PopoverMetadata.addSim({
  title: 'with left arrow',
  props: {
    onClose,
    withArrow: true,
  },
});

PopoverMetadata.addSim({
  title: 'with title',
  props: {
    onClose,
    title: 'title',
  },
});

PopoverMetadata.addSim({
  title: 'with shadow',
  props: {
    onClose,
    withShadow: true,
  },
});

PopoverMetadata.addSim({
  title: 'with right arrow',
  props: {
    onClose,
    arrowSide: Sides.Right,
    withArrow: true,
  },
});

PopoverMetadata.addSim({
  title: 'with arrow top',
  props: {
    onClose,
    arrowTop: 66,
  },
});

PopoverMetadata.addSim({
  title: 'shown',
  props: {
    onClose,
    isShown: true,
  },
});

PopoverMetadata.addSim({
  title: 'animated',
  props: {
    onClose,
    animated: true,
  },
});

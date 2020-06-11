import { Popover } from '.';
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
  title: 'with arrow',
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
  title: 'right arrow',
  props: {
    onClose,
    rightArrow: true,
  },
});

PopoverMetadata.addSim({
  title: 'with arrow top',
  props: {
    onClose,
    arrowTop: '50px',
  },
});

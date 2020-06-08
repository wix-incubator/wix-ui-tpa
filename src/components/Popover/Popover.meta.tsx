import { Popover } from '.';
import Registry from '@ui-autotools/registry';

const PopoverMetadata = Registry.getComponentMetadata(Popover);
PopoverMetadata.nonReactStrictModeCompliant = true;

PopoverMetadata.addSim({
  title: 'render',
  props: {
    onClose: () => {},
  },
});

import { AddItem, AddItemProps } from '.';
import Registry from '@ui-autotools/registry';

const AddItemMetadata = Registry.getComponentMetadata(AddItem);
AddItemMetadata.nonReactStrictModeCompliant = true;

AddItemMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  } as AddItemProps,
});

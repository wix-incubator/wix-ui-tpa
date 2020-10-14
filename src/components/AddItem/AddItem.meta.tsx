import { AddItem, AddItemProps } from '.';
import Registry from '@ui-autotools/registry';

const AddItemMetadata = Registry.getComponentMetadata(AddItem);
AddItemMetadata.nonReactStrictModeCompliant = true;

AddItemMetadata.addSim({
  title: 'render',
  props: {
    disabled: false,
    hasError: false,
    alignment: 'center',
    iconSize: 'medium',
    children: 'Add Item',
  } as AddItemProps,
});

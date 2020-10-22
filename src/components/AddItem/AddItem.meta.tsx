import * as React from 'react';
import { AddItem, AddItemProps } from '.';
import Registry from '@ui-autotools/registry';

const AddItemMetadata = Registry.getComponentMetadata(AddItem);
AddItemMetadata.nonReactStrictModeCompliant = true;
AddItemMetadata.nonA11yCompliant = true;

AddItemMetadata.addSim({
  title: 'render',
  props: {
    disabled: false,
    hasError: false,
    alignment: 'center',
    direction: 'horizontal',
    iconSize: 'medium',
    children: 'Add Item',
    onClick: () => {},
  } as AddItemProps,
});

AddItemMetadata.addSim({
  title: 'disabled',
  props: {
    disabled: true,
    hasError: false,
    alignment: 'center',
    direction: 'horizontal',
    iconSize: 'medium',
    children: 'Add Item',
    onClick: () => {},
    'aria-label': 'Add Item',
  } as AddItemProps,
});

AddItemMetadata.addSim({
  title: 'has error',
  props: {
    disabled: false,
    hasError: true,
    alignment: 'center',
    direction: 'horizontal',
    iconSize: 'medium',
    children: 'Add Item',
    onClick: () => {},
    'aria-label': 'Add Item',
  } as AddItemProps,
});

AddItemMetadata.addSim({
  title: 'only plus icon - no children',
  props: {
    disabled: false,
    hasError: false,
    alignment: 'center',
    direction: 'horizontal',
    iconSize: 'medium',
    onClick: () => {},
    'aria-label': 'Add Item',
  } as AddItemProps,
});

AddItemMetadata.addSim({
  title: 'A11Y',
  props: {
    'aria-labelledby': 'addItem_label',
    children: <div id="addItem_label">Add Item</div>,
  } as AddItemProps,
});

import { Dropdown } from '.';
import Registry from '@ui-autotools/registry';
import { optionsWithSections, simpleOptions } from './helpers';

const DropdownMetadata = Registry.getComponentMetadata(Dropdown);
DropdownMetadata.nonReactStrictModeCompliant = true;
DropdownMetadata.nonA11yCompliant = true;

DropdownMetadata.addSim({
  title: 'Simple',
  props: {
    placeholder: 'Placeholder text',
    options: simpleOptions,
  },
});

DropdownMetadata.addSim({
  title: 'Error',
  props: {
    placeholder: 'Placeholder text',
    error: true,
    errorMessage: 'The coupon code is not valid',
    options: simpleOptions,
  },
});

DropdownMetadata.addSim({
  title: 'Complex',
  props: {
    placeholder: 'Placeholder text',
    label: 'Label Text',
    error: true,
    errorMessage: 'The coupon code is not valid',
    options: optionsWithSections,
  },
});

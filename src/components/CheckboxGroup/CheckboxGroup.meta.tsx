import * as React from 'react';
import { CheckboxGroup } from '.';
import { Checkbox } from '../Checkbox';
import Registry from '@ui-autotools/registry';

const CheckboxGroupMetadata = Registry.getComponentMetadata(CheckboxGroup);
CheckboxGroupMetadata.nonReactStrictModeCompliant = true;

CheckboxGroupMetadata.addSim({
  title: 'render',
  props: {},
});

CheckboxGroupMetadata.addSim({
  title: 'with children',
  props: {
    children: [
      <Checkbox key={1} checked={false} onChange={() => {}} label="hello" />,
    ],
  },
});

CheckboxGroupMetadata.addSim({
  title: 'with label',
  props: {
    label: 'Label',
    children: [
      <Checkbox key={1} checked={false} onChange={() => {}} label="hello" />,
    ],
  },
});

import * as React from 'react';
import { CheckboxGroup, CheckboxGroupLayout } from './';
import { Checkbox } from '../Checkbox';
import Registry from '@ui-autotools/registry';

const CheckboxGroupMetadata = Registry.getComponentMetadata(CheckboxGroup);
CheckboxGroupMetadata.nonReactStrictModeCompliant = true;

const checkboxEl = (
  <Checkbox key={1} checked={false} onChange={() => {}} label="hello" />
);

CheckboxGroupMetadata.addSim({
  title: 'render',
  props: {},
});

CheckboxGroupMetadata.addSim({
  title: 'with children',
  props: {
    children: [checkboxEl],
  },
});

CheckboxGroupMetadata.addSim({
  title: 'with label',
  props: {
    label: 'Label',
    children: [checkboxEl],
  },
});
CheckboxGroupMetadata.addSim({
  title: 'with horizontal layout',
  props: {
    children: [checkboxEl],
    label: "No worries. I'm a label.",
    layout: CheckboxGroupLayout.Horizontal,
  },
});
CheckboxGroupMetadata.addSim({
  title: 'with horizontal layout with error text',
  props: {
    children: [checkboxEl],
    label: "No worries. I'm a label.",
    layout: CheckboxGroupLayout.Horizontal,
    error: true,
    errorText: "I'm an error",
  },
});
CheckboxGroupMetadata.addSim({
  title: 'with disabled',
  props: {
    label: 'Label',
    children: [checkboxEl],
    disabled: true,
  },
});
CheckboxGroupMetadata.addSim({
  title: 'with error',
  props: {
    label: 'Label',
    children: [checkboxEl],
    error: true,
  },
});
CheckboxGroupMetadata.addSim({
  title: 'with error text',
  props: {
    label: 'Label',
    children: [checkboxEl],
    error: true,
    errorText: "I'm error text",
  },
});

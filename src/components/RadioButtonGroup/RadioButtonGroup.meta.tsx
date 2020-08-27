import * as React from 'react';
import { RadioButtonGroup, RadioButtonGroupLayout } from './';
import Registry from '@ui-autotools/registry';
import { RadioButton } from '../RadioButton';
import { RadioButtonTheme } from '../RadioButton/RadioButton';

const RadioButtonGroupMetadata = Registry.getComponentMetadata(
  RadioButtonGroup,
);
RadioButtonGroupMetadata.nonReactStrictModeCompliant = true;

const RadioButtonEl = <RadioButton label={'label'} value={'val1'} />;

RadioButtonGroupMetadata.addSim({
  title: 'render',
  props: {
    name: 'name',
    onChange(value: string): void {},
  },
});

RadioButtonGroupMetadata.addSim({
  title: 'with children',
  props: {
    name: 'name',
    onChange(value: string): void {},
    children: [RadioButtonEl],
  },
});

RadioButtonGroupMetadata.addSim({
  title: 'with label',
  props: {
    name: 'name',
    onChange(value: string): void {},
    label: 'Label',
    children: [RadioButtonEl],
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'with horizontal layout',
  props: {
    name: 'name',
    onChange(value: string): void {},
    children: [RadioButtonEl],
    label: "No worries. I'm a label.",
    layout: RadioButtonGroupLayout.Horizontal,
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'with horizontal layout with error text',
  props: {
    name: 'name',
    onChange(value: string): void {},
    children: [RadioButtonEl],
    label: "No worries. I'm a label.",
    layout: RadioButtonGroupLayout.Horizontal,
    error: true,
    errorText: "I'm an error",
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'with disabled',
  props: {
    name: 'name',
    onChange(value: string): void {},
    label: 'Label',
    children: [RadioButtonEl],
    disabled: true,
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'with error',
  props: {
    name: 'name',
    onChange(value: string): void {},
    label: 'Label',
    children: [RadioButtonEl],
    error: true,
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'with Box theme',
  props: {
    name: 'name',
    onChange(value: string): void {},
    label: 'Label',
    theme: RadioButtonTheme.Box,
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'with spacing',
  props: {
    name: 'name',
    onChange(value: string): void {},
    label: 'Label',
    withSpacing: true,
  },
});
RadioButtonGroupMetadata.addSim({
  title: 'horizontal',
  props: {
    name: 'name',
    onChange(value: string): void {},
    label: 'Label',
    children: [RadioButtonEl],
    layout: RadioButtonGroupLayout.Horizontal,
  },
});

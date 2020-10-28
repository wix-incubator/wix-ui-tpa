import { ProgressBar, ProgressBarProps } from '.';
import Registry from '@ui-autotools/registry';

const ProgressBarMetadata = Registry.getComponentMetadata(ProgressBar);
ProgressBarMetadata.nonReactStrictModeCompliant = true;

ProgressBarMetadata.addSim({
  title: 'render',
  props: {
    value: 20,
  } as ProgressBarProps,
});

ProgressBarMetadata.addSim({
  title: 'render with percentage',
  props: {
    value: 20,
    showProgressIndication: true,
  } as ProgressBarProps,
});

ProgressBarMetadata.addSim({
  title: 'render with percentage 33%',
  props: {
    value: 33,
    showProgressIndication: true,
  } as ProgressBarProps,
});

ProgressBarMetadata.addSim({
  title: 'render with percentage 100%',
  props: {
    value: 33,
    showProgressIndication: true,
  } as ProgressBarProps,
});

ProgressBarMetadata.addSim({
  title: 'render with percentage RTL',
  props: {
    value: 33,
    showProgressIndication: true,
  } as ProgressBarProps,
});

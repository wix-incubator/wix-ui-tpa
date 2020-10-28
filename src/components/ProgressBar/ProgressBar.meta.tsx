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
  title: 'render with percentage 33 percents',
  props: {
    value: 33,
    showProgressIndication: true,
  } as ProgressBarProps,
});

ProgressBarMetadata.addSim({
  title: 'render with percentage 100 percents',
  props: {
    value: 100,
    showProgressIndication: true,
  } as ProgressBarProps,
});

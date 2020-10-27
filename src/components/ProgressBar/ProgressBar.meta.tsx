import { ProgressBar, ProgressBarProps } from '.';
import Registry from '@ui-autotools/registry';

const ProgressBarMetadata = Registry.getComponentMetadata(ProgressBar);
ProgressBarMetadata.nonReactStrictModeCompliant = true;

ProgressBarMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  } as ProgressBarProps,
});

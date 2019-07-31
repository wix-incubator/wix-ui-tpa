import { Toast } from '.';
import Registry from '@ui-autotools/registry';

const ToastMetadata = Registry.getComponentMetadata(Toast);
ToastMetadata.nonReactStrictModeCompliant = true;

ToastMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

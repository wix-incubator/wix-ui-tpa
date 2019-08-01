import {Toast, TOAST_SKIN, ToastProps} from '.';
import Registry from '@ui-autotools/registry';

const ToastMetadata = Registry.getComponentMetadata(Toast);
ToastMetadata.nonReactStrictModeCompliant = true;

ToastMetadata.addSim({
  title: 'render',
  props: {
    skin: TOAST_SKIN.success,
    children: ['Toast successful message']
  },
});

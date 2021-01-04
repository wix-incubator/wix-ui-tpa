import { Toast, TOAST_SKIN, ToastProps } from '.';
import Registry from '@ui-autotools/registry';
import { skinMessages } from './helpers';

const ToastMetadata = Registry.getComponentMetadata(Toast);

ToastMetadata.nonReactStrictModeCompliant = true;
ToastMetadata.nonA11yCompliant = true;

Object.values(TOAST_SKIN).forEach((skin) => {
  ToastMetadata.addSim({
    title: `${skin} with close`,
    props: {
      shouldShowCloseButton: true,
      skin,
      children: skinMessages[skin],
    } as ToastProps,
  });

  ToastMetadata.addSim({
    title: skin,
    props: {
      skin,
      children: skinMessages[skin],
    } as ToastProps,
  });
});

import { ActionsMenu } from '.';
import Registry from '@ui-autotools/registry';

const ActionsMenuMetadata = Registry.getComponentMetadata(ActionsMenu);
ActionsMenuMetadata.nonReactStrictModeCompliant = true;

ActionsMenuMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

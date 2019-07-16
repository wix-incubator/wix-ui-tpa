import { Badge } from '.';
import Registry from '@ui-autotools/registry';

const BadgeMetadata = Registry.getComponentMetadata(Badge);
BadgeMetadata.nonReactStrictModeCompliant = true;

BadgeMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

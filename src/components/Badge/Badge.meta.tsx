import {Badge, BADGE_PRIORITY} from '.';
import Registry from '@ui-autotools/registry';

const BadgeMetadata = Registry.getComponentMetadata(Badge);
BadgeMetadata.nonReactStrictModeCompliant = true;

BadgeMetadata.addSim({
  title: 'render',
  props: {
    priority: BADGE_PRIORITY.default,
  },
});

import { CounterBadge, COUNTER_BADGE_PRIORITY } from '.';
import Registry from '@ui-autotools/registry';

const CounterBadgeMetadata = Registry.getComponentMetadata(CounterBadge);
CounterBadgeMetadata.nonReactStrictModeCompliant = true;

CounterBadgeMetadata.addSim({
  title: 'render',
  props: {
    priority: COUNTER_BADGE_PRIORITY.primary,
    maximum: 99,
    value: 16,
  },
});

import { CounterBadge, COUNTER_BADGE_PRIORITY, CounterBadgeProps } from '.';
import Registry from '@ui-autotools/registry';

const CounterBadgeMetadata = Registry.getComponentMetadata(CounterBadge);
CounterBadgeMetadata.nonReactStrictModeCompliant = true;

CounterBadgeMetadata.addSim({
  title: 'render',
  props: {
    priority: COUNTER_BADGE_PRIORITY.default,
    minimum: 0,
    maximum: 99,
    children: '16',
  } as CounterBadgeProps,
});

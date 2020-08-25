import { CounterBadge } from '.';
import Registry from '@ui-autotools/registry';

const CounterBadgeMetadata = Registry.getComponentMetadata(CounterBadge);
CounterBadgeMetadata.nonReactStrictModeCompliant = true;

CounterBadgeMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});

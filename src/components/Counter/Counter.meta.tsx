import { Counter } from '.';
import Registry from '@ui-autotools/registry';

const CounterMetadata = Registry.getComponentMetadata(Counter);
CounterMetadata.nonReactStrictModeCompliant = true;

CounterMetadata.addSim({
  title: 'render',
  props: {
    onChange: () => {},
    value: 5,
    step: 1,
    min: 0,
    inputAriaLabel: 'amount',
    incrementAriaLabel: 'increment',
    decrementAriaLabel: 'decrement',
    'aria-label': ' One Ring to find them,',
  },
});

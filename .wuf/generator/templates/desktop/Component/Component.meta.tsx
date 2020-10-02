import { {%ComponentName%}, {%ComponentName%}Props } from '.';
import Registry from '@ui-autotools/registry';

const {%ComponentName%}Metadata = Registry.getComponentMetadata({%ComponentName%});
{%ComponentName%}Metadata.nonReactStrictModeCompliant = true;

{%ComponentName%}Metadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  } as {%ComponentName%}Props,
});

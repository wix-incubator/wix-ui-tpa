import { {%ComponentName%} } from '.';
import Registry from '@ui-autotools/registry';

const {%ComponentName%}Metadata = Registry.getComponentMetadata({%ComponentName%});
{%ComponentName%}.nonReactStrictModeCompliant = true;

{%ComponentName%}.addSim({
    title: 'render',
    props: {
        buttonText: 'Click me!'
    },
});

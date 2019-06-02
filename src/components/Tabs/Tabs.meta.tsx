import { Tabs } from '.';
import Registry from '@ui-autotools/registry';

const tabsMetadata = Registry.getComponentMetadata(Tabs);
tabsMetadata.nonReactStrictModeCompliant = true;

tabsMetadata.addSim({
  title: 'render',
  props: {
    items: [{ title: 'first tab' }],
  },
});

import * as React from 'react';
import { ActionsMenu, ActionsMenuProps, Alignment } from '.';
import Registry from '@ui-autotools/registry';

const ActionsMenuMetadata = Registry.getComponentMetadata(ActionsMenu);
ActionsMenuMetadata.nonReactStrictModeCompliant = true;

ActionsMenuMetadata.addSim({
  title: 'render',
  props: {
    children: <ActionsMenu.Item onClick={() => {}} content="test content" />,
  } as ActionsMenuProps,
});

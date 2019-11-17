import * as React from 'react';
import { ActionsMenuLayout, ActionsMenuLayoutProps, Alignment } from '.';
import Registry from '@ui-autotools/registry';

const ActionsMenuLayoutMetadata = Registry.getComponentMetadata(
  ActionsMenuLayout,
);
ActionsMenuLayoutMetadata.nonReactStrictModeCompliant = true;

ActionsMenuLayoutMetadata.addSim({
  title: 'render',
  props: {
    children: (
      <ActionsMenuLayout.Item onClick={() => {}} content="test content" />
    ),
  } as ActionsMenuLayoutProps,
});

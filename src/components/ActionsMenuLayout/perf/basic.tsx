import * as React from 'react';
import { ActionsMenuLayout } from '../';

export const ActionsMenuLayoutPerfer = () => {
  return (
    <ActionsMenuLayout>
      <ActionsMenuLayout.Item onClick={() => {}} key={1} content="item 1" />
      <ActionsMenuLayout.Item
        key={2}
        onClick={() => {}}
        content="item 2"
        subtitle="Subtitle"
      />
      <ActionsMenuLayout.Divider key={3} />
      <ActionsMenuLayout.Item
        key={4}
        onClick={() => {}}
        content="item 3"
        subtitle="Subtitle"
      />
      <ActionsMenuLayout.Item
        key={5}
        onClick={() => {}}
        content="item 4"
        subtitle="Subtitle"
        disabled
      />
      <ActionsMenuLayout.Item key={6} onClick={() => {}} content="item 5" />
    </ActionsMenuLayout>
  );
};

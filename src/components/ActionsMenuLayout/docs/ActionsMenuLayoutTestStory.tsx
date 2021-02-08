import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ActionsMenuLayout } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { ACTIONS_MENU_E2E_DATA_HOOK } from '../dataHooks';

function ActionsMenuLayoutTest() {
  return (
    <div>
      <ActionsMenuLayout
        focusedIndex={1}
        data-hook={ACTIONS_MENU_E2E_DATA_HOOK}
      >
        <ActionsMenuLayout.Item onClick={() => {}} content="item 1" />
        <ActionsMenuLayout.Item
          onClick={() => {}}
          content="item 2"
          subtitle="Subtitle"
        />
        <ActionsMenuLayout.Divider />
        <ActionsMenuLayout.Item
          onClick={() => {}}
          content="item 3"
          subtitle="Subtitle"
        />
        <ActionsMenuLayout.Item
          onClick={() => {}}
          content="item 4"
          subtitle="Subtitle"
          disabled
        />
        <ActionsMenuLayout.Item onClick={() => {}} content="item 5" />
      </ActionsMenuLayout>
    </div>
  );
}

storiesOf(StoryCategory.TESTS, module).add(
  'ActionsMenuLayout',
  ActionsMenuLayoutTest,
);

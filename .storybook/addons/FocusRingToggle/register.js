import React, { useState, useEffect } from 'react';
import addons, { types } from '@storybook/addons';
import { useChannel } from '@storybook/api';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './shared';

function FocusRingToggleButton() {
  const [active, setActive] = useState(false);
  const emit = useChannel({});
  useEffect(() => emit(ADDON_ID + '/change', { active }));

  return (
    <div
      style={{
        margin: 'auto 15px',
        cursor: 'pointer',
        userSelect: 'none',
        padding: '3px 8px',
        backgroundColor: active ? '#4EB7F5' : '#eee',
        color: active ? '#444' : '#999',
      }}
      onClick={() => setActive(!active)}
    >
      Focus Ring
    </div>
  );
}

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: ADDON_TITLE,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <FocusRingToggleButton />,
  });
});

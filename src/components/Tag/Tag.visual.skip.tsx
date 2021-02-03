import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { noop } from 'wix-ui-core/src/utils';

import { SKIN, Tag } from './';

visualize('Tag', () => {
  story('simple', () => {
    snap('default props', <Tag>Tag Name</Tag>);
    snap('light skin', <Tag skin={SKIN.light}>Tag Name</Tag>);
    snap(
      'clickable',
      <Tag onClick={noop} skin={SKIN.light}>
        Tag Name
      </Tag>,
    );
    snap(
      'removable',
      <Tag isRemovable onRemove={noop} skin={SKIN.light}>
        Tag Name
      </Tag>,
    );
  });
});

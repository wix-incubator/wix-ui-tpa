import * as React from 'react';
import { noop } from 'wix-ui-core/dist/standalone/es/src/utils';

import { SKIN, Tag } from '../';
import { classes } from './TagWiringExample.st.css';

export const TagWiringExample = () => {
  return (
    <>
      <Tag isRemovable onRemove={noop} className={classes.root}>
        Solid tag
      </Tag>
      <span>&nbsp;</span>
      <Tag
        isRemovable
        skin={SKIN.light}
        onRemove={noop}
        className={classes.root}
      >
        Light tag
      </Tag>
    </>
  );
};

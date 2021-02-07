import * as React from 'react';
import { SKIN, Tag } from '../';
import { classes } from './TagWiringExample.st.css';

export const TagWiringExample = () => {
  return (
    <>
      <Tag
        isRemovable
        skin={SKIN.solid}
        onRemove={() => {}}
        className={classes.root}
      >
        Solid Tag
      </Tag>
      <span>&nbsp;&nbsp;</span>
      <Tag
        isRemovable
        skin={SKIN.light}
        onRemove={() => {}}
        className={classes.root}
      >
        Light Tag
      </Tag>
    </>
  );
};

import * as React from 'react';
import { Tags } from '../';
import { classes } from './TagsWiringExample.st.css';
import { SKIN } from '../constants';

const items = Array(20)
  .fill('')
  .map((item, index) => ({
    title: `Title ${index + 1}`,
    checked: index % 3 === 0,
    value: `value ${index + 1}`,
  }));

export const TagsWiringExample = (props) => {
  const [update, forceUpdate] = React.useState(false);
  const onClick = (item) => {
    item.checked = !item.checked;
    forceUpdate(!update);
  };
  return (
    <div>
      Solid:
      <Tags
        key="solid"
        skin={SKIN.solid}
        items={items}
        onClick={onClick}
        className={classes.solid}
      />
      Light:
      <Tags
        key="light"
        skin={SKIN.light}
        items={items}
        onClick={onClick}
        className={classes.light}
      />
    </div>
  );
};

import * as React from 'react';
import { BoxSelection } from '../';
import { classes } from './BoxSelectionWiringExample.st.css';

export const BoxSelectionWiringExample = () => {
  const [selectedId, setSelectedId] = React.useState('1');
  return (
    <BoxSelection
      name="hours"
      className={classes.root}
      onChange={({ id }) => {
        return setSelectedId(id);
      }}
    >
      {[1, 2, 3].map((_n, i) => (
        <BoxSelection.Option
          key={i}
          id={`${i}`}
          name="hours"
          checked={selectedId === `${i}`}
        >
          Item-{i}
        </BoxSelection.Option>
      ))}
    </BoxSelection>
  );
};

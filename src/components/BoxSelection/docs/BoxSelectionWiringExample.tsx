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
      {['1', '2', '3', 'disabled', 'disabledAndSelected', 'unavailable'].map(
        (n) => (
          <BoxSelection.Option
            key={n}
            id={n}
            aria-describedby={n}
            checked={n === selectedId || n === 'disabledAndSelected'}
            disabled={n === 'disabled' || n === 'disabledAndSelected'}
            unavailable={n === 'unavailable'}
          >
            <div>Item-{n}</div>
          </BoxSelection.Option>
        ),
      )}
    </BoxSelection>
  );
};

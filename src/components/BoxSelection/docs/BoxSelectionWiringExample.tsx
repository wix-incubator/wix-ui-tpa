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
      {['1', '2', '3'].map((n) => (
        <BoxSelection.Option key={n} id={n} checked={selectedId === n}>
          <div>Item-{n}</div>
        </BoxSelection.Option>
      ))}
    </BoxSelection>
  );
};

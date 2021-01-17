import * as React from 'react';
import { BoxSelection } from '../';
import { classes } from './BoxSelectionWiringExample.st.css';

export const BoxSelectionWiringExample = () => {
  return (
    <BoxSelection name="hours" value={'1'} className={classes.root}>
      {[1, 2, 3].map((_n, i) => (
        <div key={i}>
          <BoxSelection.Option
            id={`${i}`}
            className={classes.boxSelectionOption}
            checked={i === 1}
          >
            <div className={classes.wrapper}>Item-{i}</div>
          </BoxSelection.Option>
        </div>
      ))}
    </BoxSelection>
  );
};

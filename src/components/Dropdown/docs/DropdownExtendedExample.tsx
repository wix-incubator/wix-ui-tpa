import * as React from 'react';
import { Dropdown } from '../Dropdown';
import { optionsWithSections, optionsWithSubtitle } from '../helpers';
import { classes } from './DropdownExtendedExample.st.css';

export const DropdownExtendedExample: React.FC = () => {
  return (
    <>
      <div>
        <h3>Dropdown</h3>
        <Dropdown className={classes.root} options={optionsWithSections} />
      </div>

      <div>
        <h3>Dropdown with placeholder</h3>
        <Dropdown
          className={classes.root}
          placeholder="This is placeholder"
          options={optionsWithSections}
        />
      </div>

      <div>
        <h3>Dropdown with subtitles</h3>
        <Dropdown className={classes.root} options={optionsWithSubtitle} />
      </div>

      <div>
        <h3>Disabled Dropdown</h3>
        <Dropdown
          className={classes.root}
          initialSelectedId="0"
          disabled
          options={optionsWithSections}
        />
      </div>
    </>
  );
};

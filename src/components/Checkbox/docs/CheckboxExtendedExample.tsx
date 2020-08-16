import * as React from 'react';
import { Checkbox, CheckboxTheme } from '../index';
import { classes } from './CheckboxExtendedExample.st.css';

export const CheckboxExtendedExample = () => {
  const [value, setValue] = React.useState(false);

  return (
    <div>
      <div>
        <h3>Checkbox</h3>
        <Checkbox
          checked={value}
          onChange={({ checked }) => setValue(checked)}
          label={value ? 'Hakol tov!' : 'Click me, ah sheli!'}
          className={classes.root}
        />
      </div>
      <div>
        <h3>Checkbox with Box</h3>
        <Checkbox
          theme={CheckboxTheme.Box}
          checked={value}
          onChange={({ checked }) => setValue(checked)}
          label={value ? 'Still wrapped!' : 'Wrapped with box!'}
          className={classes.root}
        />
      </div>
    </div>
  );
};

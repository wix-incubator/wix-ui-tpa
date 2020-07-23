import * as React from 'react';
import { CheckboxGroup } from '../index';
import { Checkbox } from '../../Checkbox';
import { classes } from './CheckboxGroupExtendedExample.st.css';

export const CheckboxGroupExtendedExample = () => {
  const [value, setValue] = React.useState({});

  return (
    <div>
      <div>
        <h3>CheckboxGroup</h3>
        <CheckboxGroup label="What's up?" className={classes.root}>
          <Checkbox
            checked={value[0]}
            name="group1"
            onChange={({ checked }) => setValue({ ...value, 0: checked })}
            label={value[0] ? 'Hakol tov!' : 'Click me, ah sheli!'}
          />
          <Checkbox
            name="group1"
            checked={value[1]}
            onChange={({ checked }) => setValue({ ...value, 1: checked })}
            label={value[1] ? 'Hakol tov!' : 'Click me, ah sheli!'}
          />
          <Checkbox
            name="group1"
            checked={value[2]}
            onChange={({ checked }) => setValue({ ...value, 2: checked })}
            label={value[2] ? 'Hakol tov!' : 'Click me, ah sheli!'}
          />
          <Checkbox
            name="group1"
            checked={value[3]}
            onChange={({ checked }) => setValue({ ...value, 3: checked })}
            label={value[3] ? 'Hakol tov!' : 'Click me, ah sheli!'}
          />
        </CheckboxGroup>
      </div>
    </div>
  );
};

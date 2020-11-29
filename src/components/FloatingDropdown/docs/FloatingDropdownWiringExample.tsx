import * as React from 'react';
import { getFloatingDropdownTestProps } from '../test-props';
import { FloatingDropdown } from '..';
import { Text } from '../../Text/Text';
import { Divider } from '../../Divider/Divider';
import { TPAComponentsProvider } from '../../TPAComponentsConfig/TPAComponentsConfig';
import { classes } from './FloatingDropdownWiringExample.st.css';
import { TYPOGRAPHY } from '../../Text';

export const FloatingDropdownWiringExample = () => {
  const props = getFloatingDropdownTestProps({
    className: classes.root,
  });
  const [selected, setSelected] = React.useState(props.options[0].id);

  return (
    <div>
      <Text>Desktop</Text>
      <FloatingDropdown
        {...props}
        onChange={({ id }) => {
          setSelected(id);
        }}
        value={selected}
      />
      <br />
      <TPAComponentsProvider value={{ mobile: true }}>
        <Text>Native Mobile</Text>
        <FloatingDropdown
          {...props}
          onChange={({ id }) => {
            setSelected(id);
          }}
          value={selected}
        />
      </TPAComponentsProvider>
      <Divider className={classes.divider} />
      <Text typography={TYPOGRAPHY.largeTitle} tagName="div">
        Disabled
      </Text>
      <Text>Desktop</Text>
      <FloatingDropdown
        {...props}
        onChange={({ id }) => {
          setSelected(id);
        }}
        value={selected}
        disabled
      />
      <br />
      <TPAComponentsProvider value={{ mobile: true }}>
        <Text>Native Mobile</Text>
        <FloatingDropdown
          {...props}
          onChange={({ id }) => {
            setSelected(id);
          }}
          value={selected}
          disabled
        />
      </TPAComponentsProvider>
    </div>
  );
};

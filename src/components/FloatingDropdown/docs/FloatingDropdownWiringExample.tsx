import * as React from 'react';
import { getFloatingDropdownTestProps } from '../test-props';
import { FloatingDropdown } from '..';
import { Text } from '../../Text/Text';
import { TPAComponentsProvider } from '../../TPAComponentsConfig/TPAComponentsConfig';

export const FloatingDropdownWiringExample = () => {
  const props = getFloatingDropdownTestProps();
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
    </div>
  );
};

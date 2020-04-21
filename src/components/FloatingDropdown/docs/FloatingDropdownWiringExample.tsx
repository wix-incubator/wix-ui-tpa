import * as React from 'react';
import { getFloatingDropdownTestProps } from '../test-props';
import { FloatingDropdown } from '..';

export const FloatingDropdownWiringExample = () => {
  const props = getFloatingDropdownTestProps();
  const [selected, setSelected] = React.useState(props.options[0].value);
  return (
    <FloatingDropdown
      {...props}
      onChange={({ id }) => {
        setSelected(id);
      }}
      value={selected}
    />
  );
};

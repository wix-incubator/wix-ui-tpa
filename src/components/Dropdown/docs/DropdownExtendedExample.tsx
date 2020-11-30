import * as React from 'react';
import { Dropdown } from '../Dropdown';
import { optionsWithSections } from '../helpers';

export const DropdownExtendedExample: React.FC = () => {
  return (
    <div>
      <Dropdown options={optionsWithSections} />
    </div>
  );
};

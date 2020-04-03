import * as React from 'react';
import { FloatingDropdown } from '../';
import styles from './FloatingDropdownWiringExample.st.css';
import { getFloatingDropdownTestProps } from '../test-props';

export const FloatingDropdownWiringExample = () => {
  return <FloatingDropdown {...getFloatingDropdownTestProps()} />;
};

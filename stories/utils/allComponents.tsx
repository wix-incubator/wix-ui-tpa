import * as React from 'react';
import * as componentsScope from '../../src/components';
// tslint:disable-next-line
import * as icons from '../../src/assets/icons';
import * as iconsScope from 'wix-ui-icons-common';
import { Modal } from '../../src/components/internal/Modal';
import { MobileExample } from './MobileExample';

/*
 * This object contains all wix-ui-tpa components including icons
 * It is used in code section of autodocs.
 */
export const allComponents = {
  ...componentsScope,

  // todo: should be removed in the next major version
  ...icons,
  Modal,
  Icons: { ...iconsScope, ...icons },
  ExampleWithContextProps: ({ children, mobile, rtl }) => (
    <componentsScope.TPAComponentsProvider value={{ mobile, rtl }}>
      {children}
    </componentsScope.TPAComponentsProvider>
  ),
  MobileExample,
};

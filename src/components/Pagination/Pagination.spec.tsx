import * as React from 'react';

import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';

import { TPAComponentsWrapper } from '../../test/utils';
import { paginationDriverFactory } from './Pagination.driver';
import { Pagination } from './';
import { paginationTestkitFactory } from '../../testkit';
import { paginationTestkitFactory as enzymePaginationTestkitFactory } from '../../testkit/enzyme';

describe('Pagination', () => {
  const createDriver = createDriverFactory(paginationDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Pagination totalPages={10} />);
    expect(driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<Pagination totalPages={10} />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        isTestkitExists(
          <Pagination totalPages={10} />,
          paginationTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Pagination totalPages={10} />,
          enzymePaginationTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

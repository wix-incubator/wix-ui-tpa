import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { spinnerDriverFactory } from './Spinner.driver';
import { Spinner } from './';
import { spinnerTestkitFactory } from '../../testkit';
import { spinnerTestkitFactory as enzymeSpinnerTestkitFactory } from '../../testkit/enzyme';

describe('Spinner', () => {
  const createDriver = createUniDriverFactory(spinnerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Spinner />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Spinner />, spinnerTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Spinner />,
          enzymeSpinnerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { {%componentName%}DriverFactory } from './{%ComponentName%}.driver';
import { {%ComponentName%} } from './';
import { {%componentName%}TestkitFactory } from '../../testkit';
import { {%componentName%}TestkitFactory as enzyme{%ComponentName%}TestkitFactory } from '../../testkit/enzyme';

describe('{%ComponentName%}', () => {
  const createDriver = createUniDriverFactory({%componentName%}DriverFactory);

  it('should render', async () => {
    const driver = createDriver(<{%ComponentName%} buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<{%ComponentName%} />, {%componentName%}TestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <{%ComponentName%} />,
          enzyme{%ComponentName%}TestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

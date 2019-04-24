import * as React from 'react';
import { {%componentName%}DriverFactory } from './{%ComponentName%}.driver';
import { {%ComponentName%} } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { {%componentName%}TestkitFactory } from '../../testkit';
import { {%componentName%}TestkitFactory as enzyme{%ComponentName%}TestkitFactory } from '../../testkit/enzyme';

describe('{%ComponentName%}', () => {
  const createDriver = createDriverFactory({%componentName%}DriverFactory);

  it('should render', () => {
    const value = 'hello!';
    const driver = createDriver(
      <{%ComponentName%} dataHook="some hook" buttonText="Click Me" />,
    );
    //make an assertion
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<{%ComponentName%} />, {%componentName%}TestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(<{%ComponentName%} />, enzyme{%ComponentName%}TestkitFactory, mount, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });
});

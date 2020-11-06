import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { {%componentName%}DriverFactory } from './{%ComponentName%}.driver';
import { {%componentName%}TestkitFactory } from '../../testkit';
import { {%componentName%}TestkitFactory as enzyme{%ComponentName%}TestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
import { {%ComponentName%}, {%ComponentName%}Props } from './';

describe('{%ComponentName%}', () => {
  const createDriver = createUniDriverFactory({%componentName%}DriverFactory);

  const bootstrap = (props: Partial<{%ComponentName%}Props> = {}/*, contextProps: TPAComponentsConfig = {}*/) => {
    return createDriver(
      // <TPAComponentsProvider value={contextProps}>
        <{%ComponentName%} {...props} />
      // </TPAComponentsProvider>
    );
  };

  it('should render', async () => {
    const driver = bootstrap();
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

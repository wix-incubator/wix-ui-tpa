import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { boxSelectionDriverFactory } from './BoxSelection.driver';
import { boxSelectionTestkitFactory } from '../../testkit';
import { boxSelectionTestkitFactory as enzymeBoxSelectionTestkitFactory } from '../../testkit/enzyme';
import { BoxSelection, BoxSelectionProps } from './';
import {
  TPAComponentsConfig,
  TPAComponentsProvider,
} from '../TPAComponentsConfig';
import { BoxSize } from './BoxSelection';
import { Option as BoxSelectionOption } from './Option';

describe('BoxSelection', () => {
  const createDriver = createUniDriverFactory(boxSelectionDriverFactory);
  const defProps: BoxSelectionProps = {
    name: 'hours',
    size: BoxSize.xLarge,
    'aria-label': '',
    'aria-labelledby': '',
    onChange: () => {},
  };

  const bootstrap = (contextProps: TPAComponentsConfig = {}) => {
    return createDriver(
      <TPAComponentsProvider value={contextProps}>
        <BoxSelection {...defProps} />,
      </TPAComponentsProvider>,
    );
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should show checked state', async () => {
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option key={1} id={'1'} checked />
      </BoxSelection>,
    );

    expect(await driver.isChecked()).toBeTruthy();
  });

  it('should indicate of 3 options', async () => {
    const expectedOptionLength = 3;
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option key={1} id={'1'} checked />
        <BoxSelection.Option key={2} id={'2'} />
        <BoxSelection.Option key={3} id={'3'} />
      </BoxSelection>,
    );

    expect(await driver.getOptionsCount()).toBe(expectedOptionLength);
  });

  it('should show disabled state', async () => {
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option key={1} id={'1'} disabled />
      </BoxSelection>,
    );
    expect(await driver.isDisabled()).toBeTruthy();
  });

  it('should indicate unavailable state', async () => {
    const driver = createDriver(
      <BoxSelection {...defProps} name={''}>
        <BoxSelection.Option key={1} id={'1'} unavailable />
      </BoxSelection>,
    );
    expect(await driver.isUnavailable()).toBeTruthy();
  });

  it('should change state', async () => {
    const driver = createDriver(
      <BoxSelection {...defProps} name={''}>
        <BoxSelection.Option key={1} id={'1'} />
      </BoxSelection>,
    );
    expect(await driver.isChecked()).toBeFalsy();
    await driver.click();
    expect(await driver.isChecked()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <BoxSelection {...defProps} />,
          boxSelectionTestkitFactory,
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
          <BoxSelection {...defProps} />,
          enzymeBoxSelectionTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

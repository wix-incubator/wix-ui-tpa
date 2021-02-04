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

describe('BoxSelection', () => {
  const createDriver = createUniDriverFactory(boxSelectionDriverFactory);
  const defProps: BoxSelectionProps = {
    name: 'hours',
    size: BoxSize.xLarge,
    'aria-label': '',
    'aria-labelledby': '',
    onChange: ({ id: string }) => {},
  };

  const bootstrap = (contextProps: TPAComponentsConfig = {}) => {
    return createDriver(<BoxSelection {...defProps} />);
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should show checked state', async () => {
    const optionId = '1';
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option id={optionId} checked />
      </BoxSelection>,
    );

    expect(await driver.isChecked(optionId)).toBeTruthy();
  });

  it('should indicate of 3 options', async () => {
    const expectedOptionLength = 3;
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option id={'1'} />
        <BoxSelection.Option id={'2'} />
        <BoxSelection.Option id={'3'} />
      </BoxSelection>,
    );

    expect(await driver.getOptionsCount()).toBe(expectedOptionLength);
  });

  it('should show disabled state', async () => {
    const optionId = '1';
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option id={optionId} disabled />
      </BoxSelection>,
    );
    expect(await driver.isDisabled(optionId)).toBeTruthy();
  });

  it('should indicate unavailable state', async () => {
    const optionId = '1';
    const driver = createDriver(
      <BoxSelection {...defProps} name={'hours'}>
        <BoxSelection.Option id={optionId} unavailable />
      </BoxSelection>,
    );
    expect(await driver.isUnavailable(optionId)).toBeTruthy();
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

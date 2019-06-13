import * as React from 'react';
import { tooltipDriverFactory } from './Tooltip.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  const createDriver = createDriverFactory(tooltipDriverFactory);
  let driver;

  beforeEach(() => {
    driver = createDriver(
      <Tooltip
        placement={'bottom'}
        timeout={0}
        content={<div>Hello world</div>}
        showDelay={0}
      >
        <div>Element</div>
      </Tooltip>,
    );
  });

  it('should be hidden by default', async () => {
    expect(await driver.isContentElementExists()).toBe(false);
  });

  it('should render tooltip on mouse enter', async () => {
    await driver.mouseEnter();
    expect(await driver.isContentElementExists()).toEqual(true);
  });
});

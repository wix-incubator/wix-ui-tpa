import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { iconButtonDriverFactory } from './IconButton.driver';
import { IconButton } from './';
import { iconButtonTestkitFactory } from '../../testkit';
import { iconButtonTestkitFactory as enzymeIconButtonTestkitFactory } from '../../testkit/enzyme';
import { ReactComponent as StarIcon } from '../../assets/icons/Star.svg';

describe('IconButton', () => {
  const createDriver = createUniDriverFactory(iconButtonDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<IconButton icon={<StarIcon />} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should call onClick function', async () => {
    const onClick = jest.fn();
    const driver = createDriver(
      <IconButton icon={<StarIcon />} onClick={onClick} />,
    );
    await driver.click();
    expect(onClick).toHaveBeenCalled();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <IconButton icon={<StarIcon />} />,
          iconButtonTestkitFactory,
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
          <IconButton icon={<StarIcon />} />,
          enzymeIconButtonTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

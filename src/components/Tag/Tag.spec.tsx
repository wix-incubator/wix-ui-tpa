import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { tagDriverFactory } from './Tag.driver';
import { tagTestkitFactory } from '../../testkit';
import { tagTestkitFactory as enzymeTagTestkitFactory } from '../../testkit/enzyme';
import { Tag, TagProps } from './';

describe('Tag', () => {
  const createDriver = createUniDriverFactory(tagDriverFactory);

  const bootstrap = (props: Partial<TagProps> = {}) => {
    return createDriver(<Tag {...props}>Tag Name</Tag>);
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  describe('close icon', () => {
    it('should be rendered', async () => {
      const driver = bootstrap({
        isRemovable: true,
      });

      expect(await driver.hasCloseIcon()).toBeTruthy();
    });

    it('should not be rendered', async () => {
      const driver = bootstrap({
        isRemovable: false,
      });

      expect(await driver.hasCloseIcon()).toBeFalsy();
    });
  });

  describe('interactive behaviour', () => {
    it('should call onRemove prior to onClick handler', async () => {
      const props = {
        isRemovable: true,
        onRemove: jest.fn(),
        onClick: jest.fn(),
      };
      const driver = bootstrap(props);
      await driver.clickRemoveButton();
      expect(props.onRemove).toHaveBeenCalled();
      expect(props.onClick).not.toHaveBeenCalled();
    });

    it('should call onClick prior to onRemove handler', async () => {
      const props = {
        isRemovable: false,
        onRemove: jest.fn(),
        onClick: jest.fn(),
      };
      const driver = bootstrap(props);
      await driver.clickRemoveButton();
      expect(props.onRemove).not.toHaveBeenCalled();
      expect(props.onClick).toHaveBeenCalled();
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Tag />, tagTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Tag />,
          enzymeTagTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

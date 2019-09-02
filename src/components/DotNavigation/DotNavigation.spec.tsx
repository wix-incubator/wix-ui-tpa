import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { dotNavigationDriverFactory } from './DotNavigation.driver';
import { Animation, Theme, DotNavigation } from './DotNavigation';
import { dotNavigationTestkitFactory } from '../../testkit';
import { dotNavigationTestkitFactory as enzymeDotNavigationTestkitFactory } from '../../testkit/enzyme';

describe('DotNavigation', () => {
  const createDriver = createUniDriverFactory(dotNavigationDriverFactory);

  describe('general', () => {
    it('should render', async () => {
      const driver = createDriver(<DotNavigation />);

      expect(await driver.exists()).toBe(true);
    });

    it('should render no dots with negative length', async () => {
      const driver = createDriver(<DotNavigation length={-5} />);
      const dots = driver.getDots();

      expect(await dots.get(0).exists()).toBe(false);
    });

    it('should render no dots with 0 length', async () => {
      const driver = createDriver(<DotNavigation length={0} />);
      const dots = driver.getDots();

      expect(await dots.get(0).exists()).toBe(false);
    });

    it('showBorder = false by default', async () => {
      const driver = createDriver(<DotNavigation />);

      expect(await driver.getShowBorder()).toBe(false);
    });

    it('showBorder = true when showBorder prop is passed', async () => {
      const driver = createDriver(<DotNavigation showBorder />);

      expect(await driver.getShowBorder()).toBe(true);
    });

    it('theme = dark by default', async () => {
      const driver = createDriver(<DotNavigation />);

      expect(await driver.getTheme()).toBe(Theme.Dark);
    });

    it('theme = light when light theme prop is passed', async () => {
      const driver = createDriver(<DotNavigation theme={Theme.Light} />);

      expect(await driver.getTheme()).toBe(Theme.Light);
    });

    it('savedCurrentIndex = 0 by default', async () => {
      const driver = createDriver(<DotNavigation />);

      expect(await driver.getSavedCurrentIndex()).toBe(0);
    });
  });

  describe('short DotNavigation', () => {
    it('should render 4 dots with length = 4', async () => {
      const driver = createDriver(<DotNavigation length={4} />);
      const dots = driver.getDots();

      expect(await dots.count()).toBe(4);
    });

    it('should render 5 dots with length = 5', async () => {
      const driver = createDriver(<DotNavigation length={5} />);
      const dots = driver.getDots();

      expect(await dots.count()).toBe(5);
    });

    it('should render 5 dots by default', async () => {
      const driver = createDriver(<DotNavigation />);
      const dots = driver.getDots();

      expect(await dots.count()).toBe(5);
    });

    it('onSelect should be called once when dot is clicked', async () => {
      const onSelect = jest.fn();
      const driver = createDriver(<DotNavigation onSelect={onSelect} />);

      await driver.getDot(0).click();
      expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('onSelect should be called with correct arguments', async () => {
      const onSelect = jest.fn((index: number) => {});
      const driver = createDriver(<DotNavigation onSelect={onSelect} />);

      await driver.getDot(0).click();
      expect(onSelect).toHaveBeenCalledWith(0);
      await driver.getDot(1).click();
      expect(onSelect).toHaveBeenCalledWith(1);
      await driver.getDot(2).click();
      expect(onSelect).toHaveBeenCalledWith(2);
      await driver.getDot(3).click();
      expect(onSelect).toHaveBeenCalledWith(3);
      await driver.getDot(4).click();
      expect(onSelect).toHaveBeenCalledWith(4);
    });

    it('savedCurrentIndex does not change when currentIndex changes', async () => {
      const driver = createDriver(<DotNavigation currentIndex={1} />);

      expect(await driver.getSavedCurrentIndex()).toBe(0);
    });
  });

  describe('long DotNavigation', () => {
    const LONG_COMPONENT_LENGTH = 10;

    it('should render 5 dots with length > 5', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );
      const dots = driver.getDots();

      expect(await dots.count()).toBe(5);
    });

    it('onSelect should be called once when dot is clicked', async () => {
      const onSelect = jest.fn();
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} onSelect={onSelect} />,
      );

      await driver.getDot(0).click();
      expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('onSelect should be called with correct arguments at the beginning of dot list', async () => {
      const onSelect = jest.fn((index: number) => {});
      const driver = createDriver(
        <DotNavigation
          currentIndex={0}
          length={LONG_COMPONENT_LENGTH}
          onSelect={onSelect}
        />,
      );

      await driver.getDot(0).click();
      expect(onSelect).toHaveBeenCalledWith(0);
      await driver.getDot(1).click();
      expect(onSelect).toHaveBeenCalledWith(1);
      await driver.getDot(2).click();
      expect(onSelect).toHaveBeenCalledWith(2);
      await driver.getDot(3).click();
      expect(onSelect).toHaveBeenCalledWith(3);
      await driver.getDot(4).click();
      expect(onSelect).toHaveBeenCalledWith(4);
    });

    it('onSelect should be called with correct arguments at the end of dot list', async () => {
      const onSelect = jest.fn((index: number) => {});
      const driver = createDriver(
        <DotNavigation
          currentIndex={LONG_COMPONENT_LENGTH - 1}
          length={LONG_COMPONENT_LENGTH}
          onSelect={onSelect}
        />,
      );

      await driver.getDot(0).click();
      expect(onSelect).toHaveBeenCalledWith(LONG_COMPONENT_LENGTH - 5);
      await driver.getDot(1).click();
      expect(onSelect).toHaveBeenCalledWith(LONG_COMPONENT_LENGTH - 4);
      await driver.getDot(2).click();
      expect(onSelect).toHaveBeenCalledWith(LONG_COMPONENT_LENGTH - 3);
      await driver.getDot(3).click();
      expect(onSelect).toHaveBeenCalledWith(LONG_COMPONENT_LENGTH - 2);
      await driver.getDot(4).click();
      expect(onSelect).toHaveBeenCalledWith(LONG_COMPONENT_LENGTH - 1);
    });

    it('onSelect should be called with correct arguments in the middle of dot list', async () => {
      const currentIndex = 2;
      const onSelect = jest.fn((index: number) => {});
      const driver = createDriver(
        <DotNavigation
          currentIndex={currentIndex}
          length={LONG_COMPONENT_LENGTH}
          onSelect={onSelect}
        />,
      );

      await driver.getDot(0).click();
      expect(onSelect).toHaveBeenCalledWith(currentIndex - 2);
      await driver.getDot(1).click();
      expect(onSelect).toHaveBeenCalledWith(currentIndex - 1);
      await driver.getDot(2).click();
      expect(onSelect).toHaveBeenCalledWith(currentIndex);
      await driver.getDot(3).click();
      expect(onSelect).toHaveBeenCalledWith(currentIndex + 1);
      await driver.getDot(4).click();
      expect(onSelect).toHaveBeenCalledWith(currentIndex + 2);
    });

    it('savedCurrentIndex does not change when currentIndex < 0', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} currentIndex={-1} />,
      );

      expect(await driver.getSavedCurrentIndex()).toBe(0);
    });

    it('savedCurrentIndex does not change when currentIndex >= length', async () => {
      const driver = createDriver(
        <DotNavigation
          length={LONG_COMPONENT_LENGTH}
          currentIndex={LONG_COMPONENT_LENGTH}
        />,
      );

      expect(await driver.getSavedCurrentIndex()).toBe(0);
    });

    it('savedCurrentIndex = currentIndex when currentIndex is in [0, length - 1]', async () => {
      const currentIndex = 1;
      const driver = createDriver(
        <DotNavigation
          length={LONG_COMPONENT_LENGTH}
          currentIndex={currentIndex}
        />,
      );

      expect(await driver.getSavedCurrentIndex()).toBe(currentIndex);
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <DotNavigation />,
          dotNavigationTestkitFactory,
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
          <DotNavigation />,
          enzymeDotNavigationTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

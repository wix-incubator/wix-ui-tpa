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
  const LONG_COMPONENT_LENGTH = 10;
  const createDriver = createUniDriverFactory(dotNavigationDriverFactory);

  describe('general', () => {
    it('should render', async () => {
      const driver = createDriver(<DotNavigation />);

      expect(await driver.exists()).toBe(true);
    });

    it('should render 5 dots by default', async () => {
      const driver = createDriver(<DotNavigation />);
      const dots = driver.getDots();

      expect(await dots.count()).toBe(5);
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

    it('should render 4 dots with length equal to 4', async () => {
      const driver = createDriver(<DotNavigation length={4} />);
      const dots = driver.getDots();

      expect(await dots.count()).toBe(4);
    });

    it('should render 9 dots with length greater than 5', async () => {
      const driver = createDriver(<DotNavigation length={6} />);
      const dots = driver.getDots();

      expect(await dots.count()).toBe(9);
    });

    it('onSelect should be called once when dot is clicked', async () => {
      const onSelect = jest.fn();
      const driver = createDriver(<DotNavigation onSelect={onSelect} />);
      const dot0 = driver.getDot(0);

      await dot0.click();
      expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('onSelect should be called with argument 4 when dot 4 is clicked', async () => {
      const onSelect = jest.fn((index: number) => {});
      const driver = createDriver(<DotNavigation onSelect={onSelect} />);
      const dot4 = driver.getDot(4);

      await dot4.click();
      expect(onSelect).toHaveBeenCalledWith(4);
    });

    it('current = 0, start = 0 by default', async () => {
      const driver = createDriver(<DotNavigation />);

      expect(await driver.getCurrent()).toBe(0);
      expect(await driver.getStart()).toBe(0);
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
  });

  describe('short DotNavigation', () => {
    it('current = 3 when currentIndex prop is 3', async () => {
      const driver = createDriver(<DotNavigation currentIndex={3} />);

      expect(await driver.getCurrent()).toBe(3);
    });

    it('current = 3 when dot 3 is clicked', async () => {
      const driver = createDriver(<DotNavigation />);
      const dot3 = driver.getDot(3);

      await dot3.click();

      expect(await driver.getCurrent()).toBe(3);
    });
  });

  describe(`long DotNavigation (length = ${LONG_COMPONENT_LENGTH})`, () => {
    it('start = 0, current = 1, animation = null when next button is clicked after render', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );

      await driver.getNextButton().click();

      expect(await driver.getStart()).toBe(0);
      expect(await driver.getCurrent()).toBe(1);
      expect(await driver.getAnimation()).toBe(null);
    });

    it('start = 1, current = 3, animation = forward when next button is clicked 3 times', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );

      await driver.getNextButton().click();
      await driver.getNextButton().click();
      await driver.getNextButton().click();

      expect(await driver.getStart()).toBe(1);
      expect(await driver.getCurrent()).toBe(3);
      expect(await driver.getAnimation()).toBe(Animation.Forward);
    });

    it('start = 7, current = 9, animation = forward when end button is clicked', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );

      await driver.getEndButton().click();

      expect(await driver.getStart()).toBe(7);
      expect(await driver.getCurrent()).toBe(9);
      expect(await driver.getAnimation()).toBe(Animation.Forward);
    });

    it('start = 0, current = 0, animation = back when start button is clicked after end button is clicked', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );

      await driver.getEndButton().click();
      await driver.getStartButton().click();

      expect(await driver.getStart()).toBe(0);
      expect(await driver.getCurrent()).toBe(0);
      expect(await driver.getAnimation()).toBe(Animation.Back);
    });

    it('start = 7, current = 8, animation = null when previous button is clicked after end button is clicked', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );

      await driver.getEndButton().click();
      await driver.getPreviousButton().click();

      expect(await driver.getStart()).toBe(7);
      expect(await driver.getCurrent()).toBe(8);
      expect(await driver.getAnimation()).toBe(null);
    });

    it('start = 6, current = 6, animation = back when previous button is clicked 3 times after end button is clicked', async () => {
      const driver = createDriver(
        <DotNavigation length={LONG_COMPONENT_LENGTH} />,
      );

      await driver.getEndButton().click();
      await driver.getPreviousButton().click();
      await driver.getPreviousButton().click();
      await driver.getPreviousButton().click();

      expect(await driver.getStart()).toBe(6);
      expect(await driver.getCurrent()).toBe(6);
      expect(await driver.getAnimation()).toBe(Animation.Back);
    });

    it('current = currentIndex, start = 0 when currentIndex prop is passed and currentIndex dot is visible', async () => {
      const currentIndex = 2;
      const driver = createDriver(
        <DotNavigation currentIndex={currentIndex} />,
      );

      expect(await driver.getCurrent()).toBe(currentIndex);
      expect(await driver.getStart()).toBe(0);
    });

    it('current = currentIndex, start = currentIndex when currentIndex prop is passed, currentIndex <= length - 3, currentIndex dot is not visible', async () => {
      const currentIndex = 7;
      const driver = createDriver(
        <DotNavigation
          currentIndex={currentIndex}
          length={LONG_COMPONENT_LENGTH}
        />,
      );

      expect(await driver.getCurrent()).toBe(currentIndex);
      expect(await driver.getStart()).toBe(currentIndex);
    });

    it(`current = currentIndex, start = length - 3 when currentIndex prop is passed, currentIndex = length - 2, currentIndex dot is not visible`, async () => {
      const currentIndex = 8;
      const driver = createDriver(
        <DotNavigation
          currentIndex={currentIndex}
          length={LONG_COMPONENT_LENGTH}
        />,
      );

      expect(await driver.getCurrent()).toBe(currentIndex);
      expect(await driver.getStart()).toBe(LONG_COMPONENT_LENGTH - 3);
    });

    it(`current = currentIndex, start = length - 3 when currentIndex prop is passed, currentIndex = length - 1, currentIndex dot is not visible`, async () => {
      const currentIndex = 9;
      const driver = createDriver(
        <DotNavigation
          currentIndex={currentIndex}
          length={LONG_COMPONENT_LENGTH}
        />,
      );

      expect(await driver.getCurrent()).toBe(currentIndex);
      expect(await driver.getStart()).toBe(LONG_COMPONENT_LENGTH - 3);
    });
  });

  describe('with defined currentIndex prop and onSelect updating it', () => {
    const CURRENT_INDEX = 3;

    class Container extends React.Component<any, any> {
      state = {
        currentIndex: CURRENT_INDEX,
      };

      render = () => {
        return (
          <DotNavigation
            length={LONG_COMPONENT_LENGTH}
            currentIndex={this.state.currentIndex}
            onSelect={(index: number) => this.setState({ currentIndex: index })}
          />
        );
      };
    }

    it('current = currentIndex + 1 when next button is clicked', async () => {
      const driver = createDriver(<Container />);

      await driver.getNextButton().click();
      expect(await driver.getCurrent()).toBe(4);
    });

    it('current = currentIndex - 1 when previous button is clicked', async () => {
      const driver = createDriver(<Container />);

      await driver.getPreviousButton().click();
      expect(await driver.getCurrent()).toBe(2);
    });

    it('current = 0 when start is clicked', async () => {
      const driver = createDriver(<Container />);

      await driver.getStartButton().click();
      expect(await driver.getCurrent()).toBe(0);
    });

    it('current = length - 1 when end is clicked', async () => {
      const driver = createDriver(<Container />);

      await driver.getEndButton().click();
      expect(await driver.getCurrent()).toBe(9);
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

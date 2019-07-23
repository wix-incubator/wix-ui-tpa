import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { ratingDriverFactory } from './Rating.driver';
import { Rating, Mode, IconSize } from './';
import { ratingTestkitFactory } from '../../testkit';
import { ratingTestkitFactory as enzymeRatingTestkitFactory } from '../../testkit/enzyme';

describe('Rating', () => {
  const createDriver = createUniDriverFactory(ratingDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Rating value={3} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render stars', async () => {
    const driver = createDriver(<Rating value={0} />);

    expect(await driver.getStars()).toBe(5);
  });

  it('should call onSelect with actual value', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(<Rating value={0} onSelect={onSelectSpy} />);

    await driver.clickOnStar(3);

    expect(onSelectSpy).toHaveBeenCalledWith(2);
  });

  it('should show active stars with provided value', async () => {
    const driver = createDriver(<Rating value={4} />);

    expect(await driver.getActiveStars()).toBe(4);
  });

  it('should show error state', async () => {
    const driver = createDriver(<Rating error value={0} />);

    expect(await driver.hasError()).toBeTruthy();
  });

  it('should show errdisabledor state', async () => {
    const driver = createDriver(<Rating disabled value={0} />);

    expect(await driver.hasDisabled()).toBeTruthy();
  });

  it('should show large icons state', async () => {
    const driver = createDriver(<Rating iconSize={IconSize.Large} value={0} />);

    expect(await driver.hasLargeMode()).toBeTruthy();
  });

  it('should call onSelect with actual value with error state', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(<Rating error onSelect={onSelectSpy} />);

    await driver.clickOnStar(3);

    expect(onSelectSpy).toHaveBeenCalledWith(2);
  });

  it('should NOT call onSelect with mode="display"', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(
      <Rating mode={Mode.Display} onSelect={onSelectSpy} />,
    );

    await driver.clickOnStar(3);

    expect(onSelectSpy).not.toHaveBeenCalled();
  });

  it('should NOT call onSelect with disabled state', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(<Rating disabled onSelect={onSelectSpy} />);

    await driver.clickOnStar(3);

    expect(onSelectSpy).not.toHaveBeenCalled();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Rating />, ratingTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Rating value={3} />,
          enzymeRatingTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

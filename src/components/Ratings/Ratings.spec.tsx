import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { ratingsDriverFactory } from './Ratings.driver';
import { Ratings, Mode, Size } from '.';
import { ratingsTestkitFactory } from '../../testkit';
import { ratingsTestkitFactory as enzymeRatingTestkitFactory } from '../../testkit/enzyme';

describe('Ratings', () => {
  const createDriver = createUniDriverFactory(ratingsDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Ratings value={3} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render stars', async () => {
    const driver = createDriver(<Ratings value={0} />);

    expect(await driver.getStars()).toBe(5);
  });

  it('should call onSelect with actual value', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(<Ratings value={0} onSelect={onSelectSpy} />);

    await driver.clickOnStar(3);

    expect(onSelectSpy).toHaveBeenCalledWith(4);
  });

  it('should show active stars with provided value', async () => {
    const driver = createDriver(<Ratings value={4} />);

    expect(await driver.getActiveStar()).toBe('4');
  });

  it('should show error state', async () => {
    const driver = createDriver(<Ratings error value={0} />);

    expect(await driver.hasError()).toBeTruthy();
  });

  it('should show disable state', async () => {
    const driver = createDriver(<Ratings disabled value={0} />);

    expect(await driver.hasDisabled()).toBeTruthy();
  });

  it('should show large state', async () => {
    const driver = createDriver(<Ratings size={Size.Large} value={0} />);

    expect(await driver.hasLargeMode()).toBeTruthy();
  });

  it('should call onSelect with actual value with error state', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(<Ratings error onSelect={onSelectSpy} />);

    await driver.clickOnStar(3);

    expect(onSelectSpy).toHaveBeenCalledWith(4);
  });

  it('should NOT call onSelect with mode="display"', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(
      <Ratings mode={Mode.Display} onSelect={onSelectSpy} />,
    );

    await driver.clickOnStar(3);

    expect(onSelectSpy).not.toHaveBeenCalled();
  });

  it('should NOT call onSelect with disabled state', async () => {
    const onSelectSpy = jest.fn();
    const driver = createDriver(<Ratings disabled onSelect={onSelectSpy} />);

    await driver.clickOnStar(3);

    expect(onSelectSpy).not.toHaveBeenCalled();
  });

  it('should show corresponding input option', async () => {
    const driver = createDriver(
      <Ratings
        inputOptions={['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla']}
        value={3}
      />,
    );

    expect(await driver.getCurrentValueLabel()).toBe('OK');
  });

  it('should show counter info w/o rating', async () => {
    const driver = createDriver(
      <Ratings mode={Mode.Display} countDisplay="150" />,
    );

    expect(await driver.getRatingInfoText()).toBe('150');
  });

  it('should show rating info w/o count', async () => {
    const driver = createDriver(
      <Ratings mode={Mode.Display} ratingDisplay="3.0" />,
    );

    expect(await driver.getRatingInfoText()).toBe('3.0');
  });

  it('should show rating and count info', async () => {
    const driver = createDriver(
      <Ratings mode={Mode.Display} ratingDisplay="3.0" countDisplay="150" />,
    );

    expect(await driver.getRatingInfoText()).toBe('3.0 | 150');
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Ratings />, ratingsTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Ratings value={3} />,
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

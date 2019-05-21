import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { stripCardDriverFactory } from './StripCard.driver';
import { StripCard } from './';
import { stripCardTestkitFactory } from '../../testkit';
import { stripCardTestkitFactory as enzymeStripCardTestkitFactory } from '../../testkit/enzyme';

describe('StripCard', () => {
  const createDriver = createUniDriverFactory(stripCardDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<StripCard />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render info', async () => {
    const valueAsString = '<div>info!</div>';
    const value = <div dangerouslySetInnerHTML={{ __html: valueAsString }} />;
    const driver = createDriver(<StripCard info={value} />);
    expect((await driver.getInfoContent()).innerHTML).toEqual(valueAsString);
  });

  it('should render image', async () => {
    const valueAsString = '<div>image!</div>';
    const value = <div dangerouslySetInnerHTML={{ __html: valueAsString }} />;
    const driver = createDriver(<StripCard media={value} />);
    expect((await driver.getMediaContent()).innerHTML).toEqual(valueAsString);
  });

  it('should render round media', async () => {
    const driver = createDriver(
      <StripCard roundMedia media={<div>image</div>} />,
    );
    expect(await driver.isMediaRounded()).toEqual(true);
  });

  it('should render without side padding', async () => {
    const driver = createDriver(<StripCard sidePadding={false} />);
    expect(await driver.isWithSidePadding()).toEqual(false);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<StripCard />, stripCardTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <StripCard />,
          enzymeStripCardTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { shareButtonDriverFactory } from './ShareButton.driver';
import { ShareButton } from './';
import { shareButtonTestkitFactory } from '../../testkit';
import { shareButtonTestkitFactory as enzymeShareButtonTestkitFactory } from '../../testkit/enzyme';

const testProps = {
  shareData: {
    title: 'Share title',
    url: 'https://wix.com',
    text: 'some text',
  },
  onClick: (sharePromise) => {
    console.log(navigator.share);
    if (!sharePromise) {
      alert('share clicked');
    }
  },
  children: 'Share',
};

describe('ShareButton', () => {
  const createDriver = createUniDriverFactory(shareButtonDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ShareButton {...testProps} />);
    expect(await driver.exists()).toBe(true);
  });
  beforeEach(() => {
    delete navigator.share;
  });
  it('should open native share', async () => {
    const onClickSpy = jest.fn();
    const driver = createDriver(
      <ShareButton {...testProps} onClick={onClickSpy} />,
    );
    const spy = jest.fn().mockReturnValue(Promise.resolve());
    navigator.share = spy;
    await driver.click();
    expect(spy).toBeCalledWith({
      title: 'Share title',
      url: 'https://wix.com',
      text: 'some text',
    });
    expect(onClickSpy).toBeCalledWith(expect.any(Promise));
  });

  it('should work fallback', async () => {
    const onClickSpy = jest.fn();
    const driver = createDriver(
      <ShareButton {...testProps} onClick={onClickSpy} />,
    );
    await driver.click();
    expect(onClickSpy).toBeCalledWith(undefined);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ShareButton {...testProps} />,
          shareButtonTestkitFactory,
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
          <ShareButton {...testProps} />,
          enzymeShareButtonTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

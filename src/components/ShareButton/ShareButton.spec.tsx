import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { shareButtonDriverFactory } from './ShareButton.driver';
import { ShareButton } from './';
import { shareButtonTestkitFactory } from '../../testkit';
import { shareButtonTestkitFactory as enzymeShareButtonTestkitFactory } from '../../testkit/enzyme';

const testProps = {
  title: 'Share title',
  url: 'https://wix.com',
  onClick: sharePromise => {
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

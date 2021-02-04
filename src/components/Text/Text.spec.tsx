import * as React from 'react';
import { textDriverFactory } from './Text.driver';
import { Text, TYPOGRAPHY, TEXT_PRIORITY } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { textTestkitFactory } from '../../testkit';
import { textTestkitFactory as enzymeTextTestkitFactory } from '../../testkit/enzyme';
import { TPAComponentsWrapper } from '../../test/utils';

describe('Text', () => {
  const createDriver = createDriverFactory(textDriverFactory);
  let driver;

  function expectTextToHaveAttributes(
    expectedTag,
    expectedTypography: TYPOGRAPHY,
    expectedPriority?: TEXT_PRIORITY,
  ) {
    expect(driver.getTagName()).toEqual(expectedTag);
    expect(driver.getTypography()).toEqual(expectedTypography);
    expectedPriority && expect(driver.getPriority()).toEqual(expectedPriority);
  }

  it('should render', () => {
    const value = 'hello!';

    driver = createDriver(<Text>{value}</Text>);

    expect(driver.getContent()).toEqual(value);
  });

  it('should render smallTitle', () => {
    const expectedTag = 'h5';
    const expectedTypography = TYPOGRAPHY.smallTitle;

    driver = createDriver(
      <Text tagName={expectedTag} typography={expectedTypography} />,
    );

    expectTextToHaveAttributes(expectedTag, expectedTypography);
  });

  it('should render runningText', () => {
    const expectedTag = 'p';
    const expectedTypography = TYPOGRAPHY.runningText;

    driver = createDriver(
      <Text tagName={expectedTag} typography={expectedTypography} />,
    );

    expectTextToHaveAttributes(expectedTag, expectedTypography);
  });

  it('should render runningText with secondary priority', () => {
    const expectedTag = 'p';
    const expectedTypography = TYPOGRAPHY.runningText;
    const expectedPriority = TEXT_PRIORITY.secondary;

    driver = createDriver(
      <Text
        tagName={expectedTag}
        typography={expectedTypography}
        priority={expectedPriority}
      />,
    );

    expectTextToHaveAttributes(
      expectedTag,
      expectedTypography,
      expectedPriority,
    );
  });

  it('should render listText', () => {
    const expectedTag = 'p';
    const expectedTypography = TYPOGRAPHY.listText;

    driver = createDriver(
      <Text tagName={expectedTag} typography={expectedTypography} />,
    );

    expectTextToHaveAttributes(expectedTag, expectedTypography);
  });

  it('should render largeTitle', () => {
    const expectedTag = 'p';
    const expectedTypography = TYPOGRAPHY.largeTitle;

    driver = createDriver(
      <Text tagName={expectedTag} typography={expectedTypography} />,
    );

    expectTextToHaveAttributes(expectedTag, expectedTypography);
  });

  it('should use default props', () => {
    const expectedTag = 'span';
    const expectedTypography = TYPOGRAPHY.runningText;

    driver = createDriver(<Text />);

    expectTextToHaveAttributes(expectedTag, expectedTypography);
  });

  it('should use mobile design', () => {
    driver = createDriver(TPAComponentsWrapper({ mobile: true })(<Text />));

    expect(driver.isMobile()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<Text />, textTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(<Text />, enzymeTextTestkitFactory, mount, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });
});

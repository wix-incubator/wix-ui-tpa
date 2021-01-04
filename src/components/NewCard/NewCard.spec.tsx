import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { newCardDriverFactory } from './NewCard.driver';
import { NewCard } from './';
import { newCardTestkitFactory } from '../../testkit';
import { newCardTestkitFactory as enzymeNewCardTestkitFactory } from '../../testkit/enzyme';

const TestComp: React.FC<any> = (props) => (
  <NewCard {...props}>
    <NewCard.Container>test</NewCard.Container>
    <NewCard.Container>test</NewCard.Container>
  </NewCard>
);

describe('NewCard', () => {
  const createDriver = createUniDriverFactory(newCardDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<TestComp />);
    expect(await driver.exists()).toBe(true);
  });

  it('should have stacked state', async () => {
    const driver = createDriver(<TestComp stacked />);
    expect(await driver.isStacked()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<NewCard />, newCardTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <NewCard />,
          enzymeNewCardTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { tagsDriverFactory } from './Tags.driver';
import { Tags } from './';
import { tagsTestkitFactory } from '../../testkit';
import { tagsTestkitFactory as enzymeTagsTestkitFactory } from '../../testkit/enzyme';
import { ALIGNMENT, SIZE, SKIN } from './constants';

describe('Tags', () => {
  const createDriver = createUniDriverFactory(tagsDriverFactory);
  const items = [
    { title: `Title 1`, value: `value 1` },
    { title: `Title 2`, checked: true, value: `value 2` },
  ];

  it('should render', async () => {
    const driver = createDriver(<Tags items={items} onClick={jest.fn()} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should invoke onClick with the element when clicking on tag item', async () => {
    const onClickSpy = jest.fn();
    const driver = createDriver(<Tags items={items} onClick={onClickSpy} />);

    await driver.clickOnTagByIndex(0);

    expect(onClickSpy).toBeCalledWith(items[0]);
  });

  it('should mark active tag', async () => {
    const activeItems = [{ title: `Title 1`, checked: true, value: `value 1` }];
    const driver = createDriver(
      <Tags items={activeItems} onClick={jest.fn()} />,
    );

    expect(await driver.getTagByIndex(0).isChecked()).toBe(true);
  });

  it('should set default states stylable states', async () => {
    const driver = createDriver(<Tags items={items} onClick={jest.fn()} />);

    expect(await driver.getAlignment()).toBe(ALIGNMENT.center);
    expect(await driver.getSize()).toBe(SIZE.medium);
    expect(await driver.getSkin()).toBe(SKIN.solid);
  });

  it('should align content to left when alignment prop is "left"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} alignment={ALIGNMENT.left} />,
    );

    expect(await driver.getAlignment()).toBe(ALIGNMENT.left);
  });

  it('should align content to right when alignment prop is "right"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} alignment={ALIGNMENT.right} />,
    );

    expect(await driver.getAlignment()).toBe(ALIGNMENT.right);
  });

  it('should align content to center when alignment prop is "center"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} alignment={ALIGNMENT.center} />,
    );

    expect(await driver.getAlignment()).toBe(ALIGNMENT.center);
  });

  it('should set content size to large when size prop is "large"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} size={SIZE.large} />,
    );

    expect(await driver.getSize()).toBe(SIZE.large);
  });

  it('should set content size to medium when size prop is "medium"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} size={SIZE.medium} />,
    );

    expect(await driver.getSize()).toBe(SIZE.medium);
  });

  it('should set content size to small when size prop is "small"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} size={SIZE.small} />,
    );

    expect(await driver.getSize()).toBe(SIZE.small);
  });

  it('should set content skin to solid when skin prop is "solid"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} skin={SKIN.solid} />,
    );

    expect(await driver.getSkin()).toBe(SKIN.solid);
  });

  it('should set content skin to light when skin prop is "light"', async () => {
    const driver = createDriver(
      <Tags items={items} onClick={jest.fn()} skin={SKIN.light} />,
    );

    expect(await driver.getSkin()).toBe(SKIN.light);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Tags items={items} onClick={jest.fn()} />,
          tagsTestkitFactory,
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
          <Tags items={items} onClick={jest.fn()} />,
          enzymeTagsTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

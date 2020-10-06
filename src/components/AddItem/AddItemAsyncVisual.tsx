import * as React from 'react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { addItemDriverFactory } from './AddItem.driver';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';

const dataHook = 'addItem-visual-test';
const createDriver = uniTestkitFactoryCreator(addItemDriverFactory);

interface AddItemAsyncVisualProps {
  hover?: boolean;
  focus?: boolean;
  onDone?(): void;
  testDataHook?: string;
  children: React.ReactElement;
}

export class AddItemAsyncVisual extends React.Component<
  AddItemAsyncVisualProps
> {
  static defaultProps = {
    onDone: () => {},
    testDataHook: dataHook,
  };
  private _driver;

  async componentDidMount() {
    const { hover, focus, onDone, testDataHook } = this.props;
    this._driver = createDriver({
      wrapper: document.body,
      dataHook: testDataHook,
    });

    try {
      await onStyleProcessorDone();

      if (hover) {
        await this._hoverTest();
      } else if (focus) {
        await this._focusTest();
      }
    } catch (e) {}

    onDone();
  }

  async _hoverTest() {
    await this._driver.hover(); // todo: implement
  }

  async _focusTest() {
    await this._driver.element().focus(); // todo: check
  }

  render() {
    const { children } = this.props;

    return (
      <>
        {React.cloneElement(children, {
          'data-hook': dataHook,
        })}
      </>
    );
  }
}

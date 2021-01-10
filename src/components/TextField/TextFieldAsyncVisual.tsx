import * as React from 'react';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { textFieldDriverFactory } from './TextField.driver';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';

const dataHook = 'textfield-visual-test';
const createDriver = testkitFactoryCreator(textFieldDriverFactory);

interface TextFieldAsyncVisualProps {
  dir: 'ltr' | 'rtl';
  hover?: boolean;
  focus?: boolean;
  onDone?(): void;
  testDataHook?: string;
  children: React.ReactElement;
}

export class TextFieldAsyncVisual extends React.Component<TextFieldAsyncVisualProps> {
  static defaultProps = {
    dir: 'ltr',
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
    await this._driver.hover();
  }

  async _focusTest() {
    await this._driver.focus();
  }

  render() {
    const { dir, children } = this.props;

    return (
      <div dir={dir}>
        {React.cloneElement(children, {
          'data-hook': dataHook,
        })}
      </div>
    );
  }
}

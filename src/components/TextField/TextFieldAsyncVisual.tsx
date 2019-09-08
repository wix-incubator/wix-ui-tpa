import * as React from 'react';
import { cases, generateDataHook } from './docs/testData';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { textFieldDriverFactory } from './TextField.driver';
import { TextField } from './TextField';

const createDriver = testkitFactoryCreator(textFieldDriverFactory);

function renderTest(options?: { dir: 'rtl' | 'ltr' }) {
  const { dir = 'ltr' } = options || {};
  return () => (
    <div dir={dir} style={{ margin: '10px' }}>
      <table>
        <tbody>
          <tr>
            <th>state</th>
            {cases.themes.map(theme => {
              return <th key={theme}>{theme}</th>;
            })}
          </tr>
          {cases.states.map(state => {
            return (
              <tr key={state.title}>
                <th>{state.title}</th>
                {cases.themes.map(theme => {
                  return (
                    <td key={theme}>
                      {cases.variations.map(variant => {
                        return (
                          <tr key={variant.title}>
                            <td>
                              <label>
                                {`${state.title} state with provided ${variant.title}`}
                                <TextField
                                  data-hook={generateDataHook(
                                    theme,
                                    variant.title,
                                    state.title,
                                  )}
                                  {...{
                                    theme: theme as any,
                                    ...variant.props,
                                    ...state.props,
                                  }}
                                />
                              </label>
                            </td>
                          </tr>
                        );
                      })}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

interface TextFieldAsyncVisualProps {
  dir: 'ltr' | 'rtl';
  hover?: boolean;
  focus?: boolean;
  onDone?(): void;
  testDataHook?: string;
}

export class TextFieldAsyncVisual extends React.Component<
  TextFieldAsyncVisualProps
> {
  static defaultProps = {
    dir: 'ltr',
    onDone: () => {},
  };
  private driver;

  async componentDidMount() {
    const { hover, focus, onDone, testDataHook } = this.props;
    this.driver = createDriver({
      wrapper: document.body,
      dataHook: testDataHook,
    });

    if (hover) {
      await this._hoverTest();
    } else if (focus) {
      await this._focusTest();
    }

    onDone();
  }

  async _hoverTest() {
    await this.driver.hover();
  }

  async _focusTest() {
    await this.driver.focus();
  }

  render() {
    const { dir } = this.props;

    return <div>{renderTest({ dir })}</div>;
  }
}

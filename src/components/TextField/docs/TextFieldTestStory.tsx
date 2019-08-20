import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { cases, generateDataHook } from './testData';
import { TextField } from '../TextField';

const kind = 'Tests';

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

storiesOf(kind, module).add('TextFieldLTR', renderTest());
storiesOf(kind, module).add('TextFieldRLT', renderTest({ dir: 'rtl' }));

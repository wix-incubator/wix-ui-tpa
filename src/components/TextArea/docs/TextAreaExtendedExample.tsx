import * as React from 'react';
import { TextArea } from '../TextArea';
import { classes } from './TextAreaExtendedExample.st.css';

export const TextAreaExtendedExample = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label>
              Text example:
              <TextArea
                value={'Text'}
                ariaLabel={'Test'}
                className={classes.textArea}
                onChange={() => {}}
              />
            </label>
          </td>
          <td>
            <label>
              Placeholder example:
              <TextArea
                value=""
                ariaLabel="Test"
                placeholder="Placeholder example"
                className={classes.textArea}
                onChange={() => {}}
              />
            </label>
          </td>
          <td>
            <label>
              Error example:
              <TextArea
                value=""
                ariaLabel="Test"
                error
                errorDescription="Test"
                placeholder="Placeholder example"
                className={classes.textArea}
                onChange={() => {}}
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            {' '}
            <label>
              Success example:
              <TextArea
                success
                value=""
                ariaLabel="Test"
                placeholder="Placeholder example"
                className={classes.textArea}
                onChange={() => {}}
              />
            </label>
          </td>
          <td>
            <label>
              Disabled:
              <TextArea
                success
                disabled
                value=""
                ariaLabel="Test"
                placeholder="Placeholder example"
                className={classes.textArea}
                onChange={() => {}}
              />
            </label>
          </td>
          <td>
            <label>
              Disabled with value:
              <TextArea
                success
                disabled
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                ariaLabel="Test"
                placeholder="Placeholder example"
                className={classes.textArea}
                onChange={() => {}}
              />
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

import * as React from 'react';
import {
  SpinnerDefaultProps,
  SpinnerProps,
  SpinnerState,
  SPINNER_TYPES,
} from './types';
import { st, classes } from './Spinner.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export class Spinner extends React.Component<SpinnerProps, SpinnerState> {
  static displayName = 'Spinner';
  static defaultProps: SpinnerDefaultProps = {
    type: SPINNER_TYPES.regular,
    width: 100,
  };

  render() {
    const { type, width, className } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <svg
            viewBox="0 0 50 50"
            className={st(classes.root, { mobile }, className)}
            data-mobile={mobile}
            style={{
              width: `${width}px`,
              height: `${width}px`,
              top: `calc(50% - ${width / 2}px)`,
              margin: `0 0 0 -${width / 2}px`,
            }}
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth={type === SPINNER_TYPES.regular ? 4 : 1}
              className={classes.circle}
            />
          </svg>
        )}
      </TPAComponentsConsumer>
    );
  }
}

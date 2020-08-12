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
    isCentered: false,
    isStatic: false,
  };

  render() {
    const { className, type, width, isCentered, isStatic } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <svg
            viewBox="0 0 50 50"
            className={st(
              classes.root,
              { mobile, centered: !!isCentered, static: !!isStatic },
              className,
            )}
            data-mobile={mobile}
            style={{
              width: `${width}px`,
              height: `${width}px`,
              top: isCentered ? `calc(50% - ${width / 2}px)` : 0,
              margin: isCentered ? `0 0 0 -${width / 2}px` : 0,
            }}
            data-hook={this.props['data-hook']}
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

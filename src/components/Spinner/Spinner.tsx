import * as React from 'react';
import {
  SpinnerDefaultProps,
  SpinnerProps,
  SpinnerState,
  SPINNER_TYPES,
} from './types';
import { st, classes } from './Spinner.st.css';

export class Spinner extends React.Component<SpinnerProps, SpinnerState> {
  static displayName = 'Spinner';
  static defaultProps: SpinnerDefaultProps = {
    type: SPINNER_TYPES.regular,
    diameter: 50,
    isCentered: false,
    isStatic: false,
  };

  render() {
    const { className, type, diameter, isCentered, isStatic } = this.props;
    return (
      <svg
        viewBox="0 0 50 50"
        className={st(
          classes.root,
          { centered: !!isCentered, static: !!isStatic },
          className,
        )}
        style={{
          width: `${diameter}px`,
          height: `${diameter}px`,
          top: isCentered ? `calc(50% - ${diameter / 2}px)` : 'auto',
          left: isCentered ? `calc(50% - ${diameter / 2}px)` : 'auto',
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
    );
  }
}

import * as React from 'react';
import { onStyleProcessorDone } from './StyleProcessorUtil';

interface VisualContainerElementState {
  isReady: boolean;
}

export class VisualContainerElement extends React.Component<
  any,
  VisualContainerElementState
> {
  state = {
    isReady: false,
  };

  componentDidMount(): void {
    onStyleProcessorDone()
      .then(() => {
        this.setState({ isReady: true });
      })
      .catch(() => {});
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props;

    return <div data-test-ready={isReady}>{children}</div>;
  }
}

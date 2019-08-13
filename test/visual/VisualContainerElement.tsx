import * as React from 'react';
import { onStyleProcessorDone } from './StyleProcessorUtil';

interface VisualContainerElementProp {
  hook?(): Promise<void>;
}

interface VisualContainerElementState {
  isReady: boolean;
}

export class VisualContainerElement extends React.Component<
  VisualContainerElementProp,
  VisualContainerElementState
> {
  state = {
    isReady: false,
  };

  componentDidMount(): void {
    onStyleProcessorDone()
      .then(async () => {
        const { hook } = this.props;
        if (hook) {
          await hook();
        }

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

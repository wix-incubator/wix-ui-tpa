import * as React from 'react';
import styleProcessor from 'wix-style-processor';

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
    styleProcessor.init().then(() => {
      this.setState({ isReady: true });
    });
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props;

    return <div data-test-ready={isReady}>{children}</div>;
  }
}

import * as React from 'react';
import { onStyleProcessorDone } from './StyleProcessorUtil';
import { DATA_READY_HOOK } from 'storybook-snapper';

interface VisualContainerElementProp {
  hook?(): Promise<void>;
  onDone?(): void;
}

interface VisualContainerElementState {
  isReady: boolean;
}

export class VisualTestContainer extends React.Component<
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

  componentDidUpdate(): void {
    const { onDone } = this.props;
    onDone && onDone();
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props;

    return <div {...{ [DATA_READY_HOOK]: isReady }}>{children}</div>;
  }
}

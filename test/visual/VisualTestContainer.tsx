import * as React from 'react';
import { onStyleProcessorDone } from './StyleProcessorUtil';
import { DATA_READY_HOOK, DATA_IGNORE_HOOK } from './dataHooks.js';

interface VisualContainerElementProp {
  ignore?: boolean;
  hook?(): Promise<void>;
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

  render() {
    const { isReady } = this.state;
    const { children, ignore } = this.props;

    return (
      <div {...{ [DATA_IGNORE_HOOK]: ignore }}>
        <div {...{ [DATA_READY_HOOK]: isReady }}>{children}</div>
      </div>
    );
  }
}

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from './VisualTestContainer';

type RenderFunction = (cb: () => void) => React.ReactNode;
type ChildrenProp = React.ReactNode | RenderFunction;

interface VisualTestProps {
  children: ChildrenProp;
  timeout: number;
  ignore: boolean;
}

interface VisualTestState {
  async: boolean;
}

const DATA_IGNORE_HOOK = 'data-test-ignore';

class VisualTest extends React.Component<VisualTestProps, VisualTestState> {
  private _hookResolve = null;
  private readonly _hookPromise: Promise<void> = new Promise(res => {
    this._hookResolve = res;
  });
  private _timeoutId: NodeJS.Timeout;

  static defaultProps = {
    children: null,
    timeout: 5000,
    ignore: false,
  };

  state = {
    async: VisualTest.isAsync(this.props),
  };

  static isAsync({ children }: { children: ChildrenProp }) {
    return typeof children === 'function'
      ? (children as RenderFunction).length > 0
      : false;
  }

  componentDidMount(): void {
    const { async } = this.state;

    if (async) {
      this._timeoutId = setTimeout(this._done, this.props.timeout);
    }
  }

  static getDerivedStateFromProps(props, state) {
    const async = VisualTest.isAsync(props);
    return state.async !== async ? async : null;
  }

  _done = () => {
    clearTimeout(this._timeoutId);
    this._hookResolve();
  };

  _doneHook = () => {
    return this._hookPromise;
  };

  _getContent = () => {
    const { children } = this.props;

    return typeof children === 'function'
      ? (children as RenderFunction)(this._done)
      : children;
  };

  render() {
    const { async } = this.state;
    const { ignore } = this.props;

    return (
      <VisualTestContainer
        hook={async ? this._doneHook : undefined}
        ignore={ignore}
      >
        {this._getContent()}
      </VisualTestContainer>
    );
  }
}

let currentTest = [];

export function visualize(visualName, tests) {
  if (currentTest.length) {
    throw new Error("Previous test didn't end as expected!");
  }

  if (!visualName) {
    throw new Error('Must have a test name');
  }

  currentTest.push(visualName);

  try {
    tests();
  } catch (e) {}

  currentTest = null;
}

export function story(storyName, cb) {
  currentTest.push(storyName);

  try {
    cb();
  } catch (e) {}

  currentTest.pop();
}

function runSnap(
  snapshotName: string,
  cb: ChildrenProp,
  ignore: boolean = false,
) {
  const eyesStorybookOptions = {};
  const fullStoryName = [...currentTest].join('/');

  if (ignore) {
    (eyesStorybookOptions as any).ignore = [
      { selector: `[${DATA_IGNORE_HOOK}="true"]` },
    ];
  }

  storiesOf(fullStoryName, module).add(
    snapshotName,
    () => <VisualTest ignore={ignore}>{cb}</VisualTest>,
    { eyes: eyesStorybookOptions },
  );
}

export function snap(snapshotName: string, cb: ChildrenProp) {
  runSnap(snapshotName, cb);
}

export function xsnap(snapshotName: string, cb: ChildrenProp) {
  runSnap(snapshotName, cb, true);
}

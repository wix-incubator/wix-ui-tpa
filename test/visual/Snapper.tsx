import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from './VisualTestContainer';

interface VisualTestProps {
  children(cb: () => void): React.ReactNode;
  timeout: number;
}

interface VisualTestState {
  async: boolean;
}

class VisualTest extends React.Component<VisualTestProps, VisualTestState> {
  private _hookResolve = null;
  private readonly _hookPromise: Promise<void> = new Promise(res => {
    this._hookResolve = res;
  });
  private _timeoutId: NodeJS.Timeout;

  static defaultProps = {
    children: () => {},
    timeout: 5000,
  };

  state = {
    async: this.props.children.length > 0,
  };

  componentDidMount(): void {
    const { async } = this.state;

    if (async) {
      this._timeoutId = setTimeout(this._done, this.props.timeout);
    }
  }

  static getDerivedStateFromProps(props, state) {
    const async = props.children.length > 0;
    return state.async !== async ? async : null;
  }

  _done = () => {
    clearTimeout(this._timeoutId);
    this._hookResolve();
  };

  _doneHook = () => {
    return this._hookPromise;
  };

  render() {
    const { async } = this.state;
    const { children } = this.props;

    return (
      <VisualTestContainer hook={async ? this._doneHook : undefined}>
        {children(this._done)}
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

export function snap(snapshotName, cb) {
  const eyesStorybookOptions = {};
  const fullStoryName = [...currentTest].join('/');

  storiesOf(fullStoryName, module).add(
    snapshotName,
    () => <VisualTest>{cb}</VisualTest>,
    eyesStorybookOptions,
  );
}

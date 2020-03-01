import * as React from 'react';
import { snap, visualize } from 'storybook-snapper';
import { BUTTON_STATES } from './constants';
import { StatesButton } from './StatesButton';
import { delay } from '../../test/utils';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import {
  StatesButtonDriver,
  statesButtonDriverFactory,
} from './StatesButton.driver';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';

interface StatesButtonVisualProps {
  done(): void;
}

interface StatesButtonVisualState {
  buttonState: BUTTON_STATES;
}

const createDriver = uniTestkitFactoryCreator(statesButtonDriverFactory);
const dataHook = 'storybook-e2e-StatesButton';

class StatesButtonVisual extends React.Component<
  StatesButtonVisualProps,
  StatesButtonVisualState
> {
  private driver: StatesButtonDriver;
  state = {
    buttonState: BUTTON_STATES.IDLE,
  };

  componentDidMount(): void {
    this.driver = createDriver({ wrapper: document.body, dataHook });
    onStyleProcessorDone()
      .then(this.act)
      .catch(() => {});
  }

  private readonly act = async () => {
    await this.driver.click();
    await delay(2000);
    this.props.done();
  };

  render() {
    return (
      <StatesButton
        disabled={false}
        state={this.state.buttonState}
        idleContent="Idle state"
        inProgressContent="Loading..."
        failureContent="Try Again"
        dataHook={dataHook}
        onClick={() => {
          this.setState({ buttonState: BUTTON_STATES.SUCCESS });
        }}
        onSuccessEnd={() => this.setState({ buttonState: BUTTON_STATES.IDLE })}
      />
    );
  }
}

visualize('StatesButton', () => {
  Object.keys(BUTTON_STATES).forEach(state => {
    const buttonState = BUTTON_STATES[state];

    snap(`${state}`, () => (
      <StatesButton
        state={buttonState}
        disabled={false}
        idleContent={'My States Button'}
        successContent={'Success'}
        inProgressContent={'Loading...'}
        failureContent={'Try Again'}
      />
    ));
  });

  snap('State change', done => <StatesButtonVisual done={done} />);
});

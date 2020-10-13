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
  onClickState: BUTTON_STATES;
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

  async componentDidUpdate(
    prevProps: Readonly<StatesButtonVisualProps>,
    prevState: Readonly<StatesButtonVisualState>,
  ) {
    const { buttonState } = this.state;

    if (
      buttonState === BUTTON_STATES.IDLE &&
      prevState.buttonState !== buttonState
    ) {
      await delay(500);
      this.props.done();
    }
  }

  private readonly act = async () => {
    await delay(500);
    await this.driver.click();
  };

  render() {
    return (
      <StatesButton
        disabled={false}
        state={this.state.buttonState}
        idleContent="Idle state"
        inProgressContent="Loading..."
        failureContent="Try Again"
        data-hook={dataHook}
        onClick={() => {
          this.setState({ buttonState: this.props.onClickState });
        }}
        onNotificationEnd={() =>
          this.setState({ buttonState: BUTTON_STATES.IDLE })
        }
      />
    );
  }
}

// visualize('StatesButton', () => {
//   Object.keys(BUTTON_STATES).forEach(state => {
//     const buttonState = BUTTON_STATES[state];
//
//     snap(`${state}`, () => (
//       <StatesButton
//         state={buttonState}
//         disabled={false}
//         idleContent={'My States Button'}
//         successContent={'Success'}
//         inProgressContent={'Loading...'}
//         failureContent={'Try Again'}
//       />
//     ));
//   });
//
//   snap('State change to success and back', done => (
//     <StatesButtonVisual done={done} onClickState={BUTTON_STATES.SUCCESS} />
//   ));
//
//   snap('State change to failure and back', done => (
//     <StatesButtonVisual done={done} onClickState={BUTTON_STATES.FAILURE} />
//   ));
// });

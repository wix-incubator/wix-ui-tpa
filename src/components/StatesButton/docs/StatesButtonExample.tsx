import * as React from 'react';
import { Text, TYPOGRAPHY } from '../../Text';
import { StatesButton } from '../StatesButton';
import { classes, st } from './StatesButtonExample.st.css';
import { BUTTON_STATES } from '../constants';

export class StatesButtonExample extends React.Component {
  state = {
    buttonStateSuccess: BUTTON_STATES.IDLE,
    buttonStateFailure: BUTTON_STATES.IDLE,
  };

  _onClickSuccess = () => {
    const { buttonStateSuccess } = this.state;

    if (buttonStateSuccess === BUTTON_STATES.IDLE) {
      this.setState({ buttonStateSuccess: BUTTON_STATES.IN_PROGRESS });
      setTimeout(() => {
        this.setState({ buttonStateSuccess: BUTTON_STATES.SUCCESS });
      }, 3000);
    }
  };

  _onClickError = () => {
    const { buttonStateFailure } = this.state;

    if (buttonStateFailure === BUTTON_STATES.IDLE) {
      this.setState({ buttonStateFailure: BUTTON_STATES.IN_PROGRESS });
      setTimeout(() => {
        this.setState({ buttonStateFailure: BUTTON_STATES.FAILURE });
      }, 3000);
    }
  };

  _onNotificationEndSuccess = () => {
    this.setState({ buttonStateSuccess: BUTTON_STATES.IDLE });
  };

  _onNotificationEndFailure = () => {
    this.setState({ buttonStateFailure: BUTTON_STATES.IDLE });
  };

  render() {
    const { buttonStateSuccess, buttonStateFailure } = this.state;
    return (
      <>
        <div>
          <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>
            Button with Success
          </Text>
          <StatesButton
            className={st(classes.root)}
            idleContent={'Click Me'}
            successContent={'Success!'}
            inProgressContent={'Loading...'}
            failureContent={'Failed to process'}
            state={buttonStateSuccess}
            onClick={this._onClickSuccess}
            onNotificationEnd={this._onNotificationEndSuccess}
          />
        </div>
        <div>
          <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>
            Button with Error
          </Text>
          <StatesButton
            className={st(classes.root)}
            idleContent={'Click Me'}
            successContent={'Success!'}
            inProgressContent={'Loading...'}
            failureContent={'Failed to process'}
            state={buttonStateFailure}
            onClick={this._onClickError}
            onNotificationEnd={this._onNotificationEndFailure}
          />
        </div>
      </>
    );
  }
}

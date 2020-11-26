export const importExample = `import { StatesButton } from 'wix-ui-tpa/StatesButton'`;

export const simpleExample = `() => {
  const [successButtonState, setSuccessButtonState] = React.useState();
  
  return (
      <>
        <div>
          <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>
            Button with Success
          </Text>
          <StatesButton
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
}`;

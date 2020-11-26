export const importExample = `import { StatesButton } from 'wix-ui-tpa/StatesButton'`;

export const simpleExample = `() => {
  const [successButtonState, setSuccessButtonState] = React.useState(BUTTON_STATES.IDLE);
  const [errorButtonState, setErrorButtonState] = React.useState(BUTTON_STATES.IDLE);
  
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
            state={successButtonState}
            onClick={() => setSuccessButtonState(BUTTON_STATES.SUCCESS)}
            onNotificationEnd={() => setSuccessButtonState(BUTTON_STATES.IDLE)}
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
            failureContent={'Failed'}
            state={errorButtonState}
            onClick={() => setErrorButtonState(BUTTON_STATES.FAILURE)}
            onNotificationEnd={() => setErrorButtonState(BUTTON_STATES.IDLE)}
          />
        </div>
      </>
  );
}`;

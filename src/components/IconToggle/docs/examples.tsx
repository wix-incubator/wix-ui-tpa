import * as React from 'react';

export const counter = `
() => {
  const startCount = 249;
  const [checked, setChecked] = React.useState(false);
  const [counter, setCounter] = React.useState(startCount);
  
  React.useEffect(() => {
    const counterDirection = checked ? 1 : 0;
    setCounter(startCount + counterDirection);
  }, [checked])
  
  return (
    <IconToggle
      icon={<Star />}
      label={counter}
      onChange={() => setChecked(!checked)}
      checked={checked}
      {...this.props}
    />    
  );
}
`;

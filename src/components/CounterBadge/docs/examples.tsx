export const importExample = `import { CounterBadge } from 'wix-ui-tpa/CounterBadge';`;

export const priority = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge>1</CounterBadge>
    <CounterBadge priority={COUNTER_BADGE_PRIORITY.secondary}>15</CounterBadge>
    <CounterBadge>88</CounterBadge>
  </div>
`;

export const validationMaximum = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge>134</CounterBadge>
    <CounterBadge maximum={500}>5436</CounterBadge>
  </div>
`;

export const formating = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge>  25  </CounterBadge>
    <CounterBadge maximum={10000}>5,345</CounterBadge>
  </div>
`;

export const validationMinimum = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge>-4</CounterBadge>
    <CounterBadge minimum={5}>3</CounterBadge>
  </div>
`;

export const validationInput = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge>54.65</CounterBadge>
    <CounterBadge>123,42</CounterBadge>
    <CounterBadge>abD</CounterBadge>
  </div>
`;

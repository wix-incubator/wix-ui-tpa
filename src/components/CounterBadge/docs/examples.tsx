export const importExample = `import { CounterBadge } from 'wix-ui-tpa/CounterBadge';`;

export const priority = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge value={1} />
    <CounterBadge priority={COUNTER_BADGE_PRIORITY.secondary} value={15} />
    <CounterBadge value={88} />
  </div>
`;

export const validationMaximum = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <CounterBadge value={134} />
    <CounterBadge maximum={50} value={134} />
  </div>
`;

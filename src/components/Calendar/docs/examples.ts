export const importExample = `import { Calendar } from 'wix-ui-tpa/Calendar';`;

export const simple = `
  <Calendar
    layout="weekly"
    calendarTitle="Default Calendar"
  />
`;

export const complex = `
  <Calendar
    layout="weekly"
  >
    <Calendar.Title>
      Custom Title
    </ Calendar.Title>
  </Calendar>
`;

export const mobile = `
  <ExampleWithContextProps mobile={true}>
    <Calendar
      layout="weekly"
      calendarTitle="Mobile Calendar"
    />
  </ExampleWithContextProps>
`;

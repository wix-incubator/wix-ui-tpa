export const importExample = `import { Calendar } from 'wix-ui-tpa/Calendar';`;

export const simple = `
  <Calendar
    calendarTitle="Default Calendar"
  />
`;

export const complex = `
  <Calendar>
    <Calendar.Title>
      Custom Calendar
    </Calendar.Title>
  </Calendar>
`;

export const mobile = `
  <ExampleWithContextProps mobile={true}>
    <Calendar
      calendarTitle="Mobile Calendar"
    />
  </ExampleWithContextProps>
`;

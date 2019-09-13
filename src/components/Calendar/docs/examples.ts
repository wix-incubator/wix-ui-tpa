export const importExample = `import { Calendar } from 'wix-ui-tpa/Calendar';`;

export const simple = `
  <Calendar
    layout="weekly"
    calendarTitle="Default Calendar"
    selectorTitle="Time Frame (default style)"
  />
`;

export const complex = `
  <Calendar
    layout="weekly"
  >
    <Calendar.Title>
      Custom Title
    </ Calendar.Title>
    <Calendar.Selector>
      <div>
        Time Frame (custom style)
      </div>
    </Calendar.Selector>
  </Calendar>
`;

export const placeholder = `
  <Calendar
    layout="weekly"
  >
    <Calendar.Title>
      Custom Title
    </ Calendar.Title>
    <Calendar.Selector>
      <div>
        Custom time frame text
      </div>
    </Calendar.Selector>
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

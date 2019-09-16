export const importExample = `import { Calendar } from 'wix-ui-tpa/Calendar';`;

export const simple = `
  <Calendar
    layout="weekly"
    calendarTitle="Default Calendar"
    selectorTitle="Default Period"
    onClickPrev={() => {alert('Clicked Prev')}}
    onClickNext={() => {alert('Clicked Next')}}
  />
`;

export const complex = `
  <Calendar
    layout="weekly"
  >
    <div style={{display: 'block', height: '60px'}}>
      <div style={{display: 'inline-block', float: 'left'}}>
        <Calendar.Title>
          Custom Title
        </ Calendar.Title>
      </div>
      <div style={{display: 'inline-block', float: 'right', marginTop: '15px'}}>
        <Calendar.Selector
          onClickPrev={() => {alert('Clicked Prev')}}
          onClickNext={() => {alert('Clicked Next')}}
        >
          <span style={{textTransform: 'uppercase'}}>
            Custom Period
          </span>
        </Calendar.Selector>
      </div>
    </div>
  </Calendar>
`;

export const placeholder = `
  <Calendar
    layout="weekly"
    calendarTitle="Default Calendar"
    selectorTitle="Default Period"
    onClickPrev={() => {alert('Clicked Prev')}}
    onClickNext={() => {alert('Clicked Next')}}
  >
    <Calendar.Selector style={{margin: 0}}/>
    <Calendar.Title />
  </Calendar>
`;

export const mobile = `
  <ExampleWithContextProps mobile={true}>
    <Calendar
      layout="weekly"
      calendarTitle="Mobile Calendar"
      selectorTitle="Default Period"
      onClickPrev={() => {alert('Clicked Prev')}}
      onClickNext={() => {alert('Clicked Next')}}
    />
  </ExampleWithContextProps>
`;

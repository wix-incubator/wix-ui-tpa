export const importExample = `import { Event } from 'wix-ui-tpa/Event';`;

const createStringComponent = (
  exampleTitle,
  showTime,
  eventTitle = 'BYOB Party',
  fullday = false,
  isRightToLeft = false,
  isSelected = false,
) => {
  return `
    <div style={{width: "135px"}}>
       <h4>${exampleTitle}</h4>
          <TPAComponentsProvider value={{ rtl: ${isRightToLeft} }}>
            <Event fullday={${fullday}} showTime={${showTime}} time='21:30' title='${eventTitle}' selected={${isSelected}}/>
          </TPAComponentsProvider>   
       </div>
    `;
};

const createComponentsSection = stringComponents => {
  return `<div style={{display: "flex", "justifyContent": "space-around"}}>
        ${stringComponents.join(' ')}
    </div>
    `;
};

const withTime = createStringComponent('With Time', true);
const withoutTime = createStringComponent('Without Time', false);
const ellipsis = createStringComponent(
  'Ellipsis',
  true,
  'Tomorrowland Fastival',
);
const selected = createStringComponent(
  'Selected',
  true,
  'Family Fun',
  false,
  false,
  true,
);
export const regularSection = createComponentsSection([
  withTime,
  withoutTime,
  ellipsis,
  selected,
]);

const fulldayWithTime = createStringComponent(
  'With Time',
  true,
  'BYOB Party',
  true,
);
const fulldayWithoutTime = createStringComponent(
  'Without Time',
  false,
  'BYOB Party',
  true,
);
const fulldayEllipsis = createStringComponent(
  'Ellipsis',
  true,
  'Tomorrowland Fastival',
  true,
);
const fulldaySelected = createStringComponent(
  'Selected',
  true,
  'Family Fun',
  true,
  false,
  true,
);
export const fulldaySection = createComponentsSection([
  fulldayWithTime,
  fulldayWithoutTime,
  fulldayEllipsis,
  fulldaySelected,
]);

export const moreEventsSection = createStringComponent('', false, '+2 more');

export const importExample = `import { Event } from 'wix-ui-tpa/Event';`;

const createStringComponent = (
  exampleTitle,
  showTime,
  eventTitle = 'BYOB Party',
  multiday = false,
  isRightToLeft = false,
  isSelected = false,
) => {
  return `
    <div style={{width: "135px"}}>
       <h4>${exampleTitle}</h4>
          <TPAComponentsProvider value={{ rtl: ${isRightToLeft} }}>
            <Event multiday={${multiday}} showTime={${showTime}} time='21:30' title='${eventTitle}' selected={${isSelected}}/>
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

const multidayWithTime = createStringComponent(
  'With Time',
  true,
  'BYOB Party',
  true,
);
const multidayWithoutTime = createStringComponent(
  'Without Time',
  false,
  'BYOB Party',
  true,
);
const multidayEllipsis = createStringComponent(
  'Ellipsis',
  true,
  'Tomorrowland Fastival',
  true,
);
const multidaySelected = createStringComponent(
  'Selected',
  true,
  'Family Fun',
  true,
  false,
  true,
);
export const multidaySection = createComponentsSection([
  multidayWithTime,
  multidayWithoutTime,
  multidayEllipsis,
  multidaySelected,
]);

const leftToRight = createStringComponent('Left-to-Right', true);
const rightToLeft = createStringComponent(
  'Right-to-Left',
  true,
  'BYOB Party',
  false,
  true,
);
export const alignment = createComponentsSection([leftToRight, rightToLeft]);

export const moreEventsSection = createStringComponent('', false, '+2 more');

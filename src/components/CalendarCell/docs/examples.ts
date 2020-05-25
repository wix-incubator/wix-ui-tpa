import { Times } from '../CalendarCell';
export const importExample = `import { CalendarCell } from 'wix-ui-tpa/CalendarCell';`;
const createStringCell = (
  title,
  timeType = '',
  stretchable = false,
  width = 135,
  height = 180,
) => {
  return `
    <div style={{width: "${width}px", height: "${height}px"}}>
        <h4>${title}</h4>
        <CalendarCell stretchable={${stretchable}} timeType="${timeType}" time='17' />
    </div>
    `;
};

export const timeTypes = `
<div style={{display: "flex", "justifyContent": "space-around"}}>
    ${createStringCell('Default')}
    ${createStringCell('Previous Month', Times.previousMonth)}
    ${createStringCell('Previous Days', Times.previousDays)}
    ${createStringCell('Current Day', Times.currentDay)}
    ${createStringCell('Next Month', Times.nextMonth)}
</div>
`;

export const resulotions = `
<div style={{display: "flex", "justifyContent": "space-around"}}>
    ${createStringCell('1-on-1', '', false, 135)}
    ${createStringCell('Stretched', '', true, 135, 50)}
</div>
`;

import { Times } from '../CalendarCell';
export const importExample = `import { CalendarCell } from 'wix-ui-tpa/CalendarCell';`;
const createStringCell = (
  title,
  timeType = '',
  stretchable = false,
  width = 135,
  height = 180,
  boldBackground = false,
  boldTitle = false,
  current = false,
) => {
  return `
    <div style={{width: "${width}px", height: "${height}px"}}>
        <h4>${title}</h4>
        <CalendarCell current={${current}} boldBackground={${boldBackground}} boldTitle={${boldTitle}} stretchable={${stretchable}} timeType="${timeType}" title='17' />
    </div>
    `;
};

export const timeTypes = `
<div style={{display: "flex", "justifyContent": "space-around"}}>
    ${createStringCell('Previous Month', Times.previousMonth)}
    ${createStringCell(
      'Previous Days',
      Times.previousDays,
      false,
      135,
      135,
      false,
      true,
    )}
    ${createStringCell(
      'Current Day',
      Times.currentDay,
      false,
      135,
      135,
      false,
      false,
      true,
    )}
    ${createStringCell(
      'This month future days',
      '',
      false,
      135,
      135,
      true,
      true,
    )}
    ${createStringCell('Next Month', Times.nextMonth, false, 135, 135, true)}
</div>
`;

export const resulotions = `
<div style={{display: "flex", "justifyContent": "space-around"}}>
    ${createStringCell('1-on-1', '', false, 135)}
    ${createStringCell('Stretched', '', true, 135, 50)}
</div>
`;

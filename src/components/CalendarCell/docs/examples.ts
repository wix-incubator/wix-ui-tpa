import { Times } from '../';
export const importExample = `import { CalendarCell } from 'wix-ui-tpa/CalendarCell';`;
const cell = ({
  title,
  stretchable = false,
  width = 135,
  height = 180,
  current = false,
  timeType = Times.futureDate,
}) => {
  return `
    <div style={{width: "${width}px", height: "${height}px"}}>
        <h4>${title}</h4>
        <CalendarCell current={${current}} timeType="${timeType}" stretchable={${stretchable}} title='17' />
    </div>
    `;
};

export const timeTypes = `
<div style={{display: "flex", "justifyContent": "space-around"}}>
    ${cell({ title: 'Previous Month', timeType: Times.pastDate })}
    ${cell({ title: 'Previous Day', timeType: Times.pastDate, current: true })}
    ${cell({ title: 'Current Day', timeType: Times.today })}
    ${cell({
      title: 'Future Day',
      timeType: Times.futureDate,
      current: true,
    })}
    ${cell({ title: 'Next Month', timeType: Times.futureDate })}
</div>
`;

export const resulotions = `
<div style={{display: "flex", "justifyContent": "space-around", height: "187px"}}>
    ${cell({ title: '1-on-1', current: true })}
    ${cell({
      title: 'Stretched',
      stretchable: true,
      height: 50,
      current: true,
    })}
</div>
`;

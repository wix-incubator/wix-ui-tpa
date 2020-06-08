export const importExample = `import { Popover } from 'wix-ui-tpa/Popover';`;

const createStringComponent = (exampleTitle, rtl = false) => {
  return `
      <div style={{width: "300px"}}>
         <h4>${exampleTitle}</h4>
         <Popover title={'Events'} onClose={()=>alert('close click!')} rightToLeft={${rtl}}>
            <div>Michal birthday party</div>
            <div>Movies night</div>
            <div>Football tournament</div>
         </Popover>
      </div>
      `;
};
const createComponentsSection = stringComponents => {
  return `<div style={{display: "flex", "justifyContent": "space-around"}}>
          ${stringComponents.join(' ')}
      </div>
      `;
};

const leftToRight = createStringComponent('Left-To-Right');
const rightToLeft = createStringComponent('Right-To-Left', true);
export const alignment = createComponentsSection([leftToRight, rightToLeft]);

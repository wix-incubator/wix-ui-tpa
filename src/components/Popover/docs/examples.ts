export const importExample = `import { Popover } from 'wix-ui-tpa/Popover';`;

const createStringComponent = (exampleTitle, isRightToLeft = false) => {
  return `
      <div style={{width: "300px"}}>
         <h4>${exampleTitle}</h4>
         <TPAComponentsProvider value={{ rtl: ${isRightToLeft} }}>
               <Popover title={'Events'} onClose={()=>alert('close click!')}>
                  <div>Michal birthday party</div>
                  <div>Movies night</div>
                  <div>Football tournament</div>
               </Popover>
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

const defaultPopover = createStringComponent('');
//const rightToLeft = createStringComponent('Right-To-Left', true);

export const popoverExample = createComponentsSection([defaultPopover]);

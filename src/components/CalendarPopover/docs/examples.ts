export const importExample = `import { CalendarPopover } from 'wix-ui-tpa/CalendarPopover';`;

const createStringComponent = (exampleTitle, isRightToLeft = false) => {
  return `
      <div style={{width: "300px"}}>
         <h4>${exampleTitle}</h4>
         <TPAComponentsProvider value={{ rtl: ${isRightToLeft} }}>
               <CalendarPopover isShown={true} title={'Events'} onClose={()=>alert('close click!')}>
                  <div>Michal birthday party</div>
                  <div>Movies night</div>
                  <div>Football tournament</div>
               </CalendarPopover>
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

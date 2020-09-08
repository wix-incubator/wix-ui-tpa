export const importExample = `import { CalendarPopover } from 'wix-ui-tpa/CalendarPopover';`;

const createStringComponent = ({
  title,
  isRightToLeft = false,
  manualFocus = false,
}) => {
  return `
      <div style={{width: "300px"}}>
         <h4>${title}</h4>
         <TPAComponentsProvider value={{ rtl: ${isRightToLeft} }}>
               <CalendarPopover manualFocus={${manualFocus}} isShown={true} 
               title=<h2 style={{marginTop: "0"}}>Events</h2> onClose={()=>alert('close click!')}>
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

const defaultPopover = createStringComponent({ title: 'default' });

export const popoverExample = createComponentsSection([defaultPopover]);

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
               <CalendarPopover manualFocus={${manualFocus}} isShown={true} title={'Events'} onClose={()=>alert('close click!')}>
                  <Event time={'11:00'} title={'Michal\\'s birthday party'} />
                  <Event time={'19:00'} title={'Movies night'} />
                  <Event time={'21:00'} title={'Football tournament'}/>
               </CalendarPopover>
            </TPAComponentsProvider>
      </div>
      `;
};
const createComponentsSection = (stringComponents) => {
  return `<div style={{display: "flex", "justifyContent": "space-around"}}>
          ${stringComponents.join(' ')}
      </div>
      `;
};

const defaultPopover = createStringComponent({ title: 'Events' });

export const popoverExample = createComponentsSection([defaultPopover]);

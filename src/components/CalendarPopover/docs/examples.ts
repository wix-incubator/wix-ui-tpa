export const importExample = `import { CalendarPopover } from 'wix-ui-tpa/CalendarPopover';`;

const createStringComponent = ({
  title = '',
  isRightToLeft = false,
  isInPopover = false,
}) => {
  return `
      <div style={{width: "300px"}}>
         <div>
             <TPAComponentsProvider value={{ rtl: ${isRightToLeft} }}>
                 <CalendarPopover placement='right' target={<h4 style={{ padding: '5px', width: '50px', height: '50px', border: 'white solid 2px'}}>${title}</h4>} isShown={true} title={'Events'} onClose={()=>console.log('close click! first popover')}>
                    <div>Michal birthday party</div>
                    <div>Movies night</div>
                    <div>Football tournament</div>
                        {
                              ${isInPopover} && 
                              <CalendarPopover 
                                    withArrow={false}
                                    placement='right-start' 
                                    target={<div style={{width: '100px', height: '100px', background: 'white'}}>Pie bake-out</div>} 
                                    isShown={true} title={'Pie Bake Out'} 
                                    onClose={()=>console.log('close click! second popover')}>
                                           <div>location: Tel Aviv, Cake Time Shop</div>
                                           <div>time: 09/09/2020</div>
                                           <div>description: roll your sleves and get ready to make some pie!</div>
                              </CalendarPopover>
                        }
                  </CalendarPopover>
               </TPAComponentsProvider>
            </div>
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

const popoverInPopover = createStringComponent({
  title: 'popover in popover',
  isInPopover: true,
});

export const popoverExample = createComponentsSection([
  defaultPopover,
  popoverInPopover,
]);

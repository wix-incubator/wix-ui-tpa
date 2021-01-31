export const importExample = `import { BoxSelection } from 'wix-ui-tpa/BoxSelection';`;

export const horizontalExample = `
() => {
  const [selectedId, setSelectedId] = React.useState(0);
  
  return (
    <div style={{ height: 236, width: '50%' }}>
      <BoxSelection
        name={'hour-selection'}
        onChange={({ id }) => {
          return setSelectedId(id);
        }}>
        <BoxSelection.Option className={'global-min-width-150px'} id={0} checked={selectedId === 0}>10:00</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={1} checked={selectedId === 1}>10:30</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={2} checked={selectedId === 2}>11:00</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={3} checked={selectedId === 3}>11:30</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={4} checked={selectedId === 4}>12:00</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={5} checked={selectedId === 5}>12:30</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={6} checked={selectedId === 6}>13:00</BoxSelection.Option>
        <BoxSelection.Option className={'global-min-width-150px'} id={7} checked={selectedId === 7}>13:30</BoxSelection.Option>
      </BoxSelection>
    </div>
  );
}
`;

export const verticalExample = `
() => {
  const [selectedId, setSelectedId] = React.useState(0);
  
  return (
    <div style={{ height: 236, width: '50%' }}>
      <BoxSelection
        name={'hour-selection-vertical'}
        vertical={true}
        onChange={({ id }) => {
          return setSelectedId(id);
        }}>
        <BoxSelection.Option id={0} checked={selectedId === 0}>10:00</BoxSelection.Option>
        <BoxSelection.Option id={1} checked={selectedId === 1}>10:30</BoxSelection.Option>
        <BoxSelection.Option id={2} checked={selectedId === 2}>11:00</BoxSelection.Option>
        <BoxSelection.Option id={3} checked={selectedId === 3}>11:30</BoxSelection.Option>
        <BoxSelection.Option id={4} checked={selectedId === 4}>12:00</BoxSelection.Option>
        <BoxSelection.Option id={5} checked={selectedId === 5}>12:30</BoxSelection.Option>
        <BoxSelection.Option id={6} checked={selectedId === 6}>13:00</BoxSelection.Option>
        <BoxSelection.Option id={7} checked={selectedId === 7}>13:30</BoxSelection.Option>
      </BoxSelection>
    </div>
  );
}
`;

export const smallSizeExample = `
() => {
  const [selectedId, setSelectedId] = React.useState('1');

    return (
        <BoxSelection name="small" 
                      size="small" inline
                      onChange={({ id }) => {
                        return setSelectedId(id);
                      }}>
            {['1', '2', '3'].map((id) => (
                <BoxSelection.Option id={id} checked={selectedId === id} key={id}>
                    <div>Small Item {id}</div>
                </BoxSelection.Option>        
            ))}
        </BoxSelection>
  );
}
`;

export const disabledExmaple = `
<BoxSelection name="disabled" inline>
  <BoxSelection.Option id={'1'} disabled> 
    <div>Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledAndCheckedExmaple = `
<BoxSelection name="disabled-n-checked" inline>
  <BoxSelection.Option id={'1'} checked disabled> 
    <div>Checked And Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const unavailableExample = `
<BoxSelection name="unavailable" inline>
  <BoxSelection.Option id={'1'} unavailable>
    <div>Unavailable</div>
  </BoxSelection.Option>
</BoxSelection>
`;

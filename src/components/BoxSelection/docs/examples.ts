export const importExample = `import { BoxSelection } from 'wix-ui-tpa/BoxSelection';`;

export const uncheckedExample = `
<ExampleWithContextProps>
  <BoxSelection name="hours">
    <BoxSelection.Option id={'1'}>
      <div>Unchecked</div>
    </BoxSelection.Option>
  </BoxSelection>
</ExampleWithContextProps>
`;

export const checkedExample = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} checked> 
    <div>Checked</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledExmaple = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} disabled> 
    <div>Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledAndCheckedExmaple = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} checked disabled> 
    <div>Checked And Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const unavailableExample = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} unavailable>
    <div>Unavailable</div>
  </BoxSelection.Option>
</BoxSelection>
`;

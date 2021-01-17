export const importExample = `import { BoxSelection } from 'wix-ui-tpa/BoxSelection';`;

export const uncheckedExample = `
<ExampleWithContextProps>
  <BoxSelection name="hours">
    <BoxSelection.Option key={1} id={'1'} withFocusRing>
      <div>Unchecked</div>
    </BoxSelection.Option>
  </BoxSelection>
</ExampleWithContextProps>
`;

export const checkedExample = `
<BoxSelection name="hours" value="1">
  <BoxSelection.Option key={1} id={'1'} checked> 
    <div>Checked</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledExmaple = `
<BoxSelection name="hours">
  <BoxSelection.Option key={1} id={'1'} disabled> 
    <div>Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledAndCheckedExmaple = `
<BoxSelection name="hours" value="1">
  <BoxSelection.Option key={1} id={'1'} checked disabled> 
    <div>Checked And Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const unavailableExample = `
<BoxSelection name="hours">
  <BoxSelection.Option key={1} id={'1'} unavailable>
    <div>Unavailable</div>
  </BoxSelection.Option>
</BoxSelection>
`;

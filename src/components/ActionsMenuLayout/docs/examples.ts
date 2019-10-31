export const importExample = `import { ActionsMenuLayout } from 'wix-ui-tpa/ActionsMenuLayout';`;

const onClick = () => console.log('clicked');
export const ActionsMenuLayoutExample = `
<ActionsMenuLayout>
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
    <ActionsMenuLayout.Divider  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 3" subtitle="Subtitle" />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 4" subtitle="Subtitle" disabled={true} />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 5"  />
</ActionsMenuLayout>
`;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  <ActionsMenuLayout>
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
  </ActionsMenuLayout>
</ExampleWithContextProps>
`;

export const rtlExample = `
<div dir="rtl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<ExampleWithContextProps rtl={true}>
<div style={{flex: 1}}>
<Text>Align Left</Text>
<ActionsMenuLayout alignment="left">
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
    <ActionsMenuLayout.Divider  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 3" subtitle="Subtitle"  prefixIcon={<Icons.Heart />}/>
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 4" subtitle="Subtitle" prefixIcon={<Icons.Heart />} disabled={true} />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 5" prefixIcon={<Icons.Heart />} />
</ActionsMenuLayout>
</div>
<div style={{flex: 1}}>
<Text>Align Center</Text>
<ActionsMenuLayout alignment="center">
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
    <ActionsMenuLayout.Divider  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 3" subtitle="Subtitle"  prefixIcon={<Icons.Heart />}/>
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 4" subtitle="Subtitle" disabled={true} prefixIcon={<Icons.Heart />} />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 5" prefixIcon={<Icons.Heart />} />
</ActionsMenuLayout>
</div>
<div style={{flex: 1}}>
<Text>Align right</Text>
<ActionsMenuLayout alignment="right">
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
    <ActionsMenuLayout.Divider  />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 3" subtitle="Subtitle" prefixIcon={<Icons.Heart />}/>
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 4" subtitle="Subtitle" disabled={true} prefixIcon={<Icons.Heart />} />
    <ActionsMenuLayout.Item onClick={${onClick}} content="item 5" prefixIcon={<Icons.Heart />} />
</ActionsMenuLayout>
</div>
</ExampleWithContextProps>
</div>
`;

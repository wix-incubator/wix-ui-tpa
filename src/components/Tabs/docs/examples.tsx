import * as React from 'react';

const generateItems = (length) =>
  new Array(length)
    .fill(0)
    .map((__, idx) => `{ title: 'Title ${idx + 1}', id: 'tab-${idx}' }`);

const items = `[
  ${generateItems(4)}
]`;
const manyItems = `[
  ${generateItems(10)}
]`;

const generateAnchorItems = (length = 1) =>
  Array.from(
    { length },
    (item, index) => `{
    title: 'Anchor ${index + 1}',
    href: '/some-href-${index + 1}',
    target: '_blank',
    rel: 'noopener noreferrer'
  }`,
  );

const anchorItems = `[
  ${generateAnchorItems(5)}
]`;

export const importExample = `import { Tabs } from 'wix-ui-tpa/Tabs'`;
export const skins = `() => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return (
    <>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>Full underline</Text>  
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} skin={SKIN.fullUnderline}/>
      <br/>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>Fit underline</Text>
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} skin={SKIN.fitUnderline}/>
      <br/>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>No underline</Text>
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} skin={SKIN.clear}/>
    </>
  );
}
`;

export const alignment = `() => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return (
    <>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>Left alignment</Text>  
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} alignment={ALIGNMENT.left}/>
      <br/>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>center alignment</Text>
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} alignment={ALIGNMENT.center}/>
      <br/>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>right alignment</Text>
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} alignment={ALIGNMENT.right}/>
    </>
  );
}
`;

export const variants = `() => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return (
    <>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>Full width</Text>  
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} variant={VARIANT.fullWidth}/>
      <br/>
      <Text tagName="h3" typography={TYPOGRAPHY.listText}>Fit</Text>
      <Tabs items={${items}} activeTabIndex={activeTab} onTabClick={setActiveTab} variant={VARIANT.fit}/>
    </>
  );
}
`;

export const scroll = `() => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return (
    <div style={{width: '50%'}}>
      <Tabs items={${manyItems}} activeTabIndex={activeTab} onTabClick={setActiveTab}/>
    </div>
  );
}
`;

export const anchors = `() => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return (
    <div>
      <Tabs items={${anchorItems}} activeTabIndex={activeTab} onTabClick={setActiveTab}/>
    </div>
  );
}
`;

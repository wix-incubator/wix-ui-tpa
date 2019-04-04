export const importExample = `import {Card} from 'wix-ui-tpa/dist/src/components/Card';`;

const imageComponent = (width = 550, height = 322) => `
<div
 style={{
    height: '100%',
    backgroundImage: 'url(https://picsum.photos/${width}/${height}})',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
 }}/>
`;

export const sideBySide = `
<Card
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
      </div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.runningText}>Tagline</Text>
      </div>
      <div style={{margin: '10px 0'}}><Divider/></div>
      <div style={{marginBottom: '5px'}}>
        <Text typography={TYPOGRAPHY.runningText}>Lorem ipsum dolor sit amet.</Text>
      </div>
      <div style={{marginBottom: '5px'}}>
        <Text typography={TYPOGRAPHY.runningText}>Lorem ipsum dolor sit amet.</Text>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button >Book</Button>
      </div>
    </div>
  }/>
`;

export const overlapping = `
<OverlappingCard
  media={${imageComponent(620, 390)}}
  info={
    <div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.smallTitle}>Overlapping</Text>
      </div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.runningText}>Tagline</Text>
      </div>
      <div style={{margin: '10px 0'}}><Divider/></div>
      <div style={{marginBottom: '5px'}}>
        <Text typography={TYPOGRAPHY.runningText}>Lorem ipsum dolor sit amet.</Text>
      </div>
      <div style={{marginBottom: '5px'}}>
        <Text typography={TYPOGRAPHY.runningText}>Lorem ipsum dolor sit amet.</Text>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button >Book</Button>
      </div>
    </div>
  }/>
`;

export const withSettings = `
  <div>
    <div className="tpa-container">
      <CodeExample title="Card Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\\n')}>
        <CardExtendedExample/>
      </CodeExample>
    </div>
    <MockSettings
      wixNumberParams={[{
        label: 'Border Width',
        wixParam: 'borderWidth',
        defaultNumber: 1,
        unit: 'px'
      }]}
      wixColorParams={[{
        label: 'Info Background Color',
        wixParam: 'infoBGColor',
        defaultColor: 'color-1'
      },{
        label: 'Image Background Color',
        wixParam: 'imageBGColor',
        defaultColor: 'color-1'
      },{
        label: 'Border Color',
        wixParam: 'borderColor',
        defaultColor: 'color-5'
      }]}/>
  </div>
`

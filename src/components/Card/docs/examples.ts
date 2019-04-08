export const importExample = `import {Card} from 'wix-ui-tpa/dist/src/components/Card';`;

const imageComponent = (width = 550, height = 322) => `
<div
 style={{
    height: '100%',
    backgroundImage: 'url(https://picsum.photos/${width}/${height})',
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

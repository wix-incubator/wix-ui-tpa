export const importExample = `import {OverlappingCard} from 'wix-ui-tpa/dist/src/components/OverlappingCard';`;

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

export const overlapping = `
<OverlappingCard
  media={${imageComponent(852, 388)}}
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

export const importExample = `import {StackedCard} from 'wix-ui-tpa/StackedCard';`;

const imageComponent = (width = 550, height = 322) => `
<div
 style={{
    height: '100%',
    backgroundImage: 'url(https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_${width},h_${height},al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
 }}/>
`;

export const stacked = `
<StackedCard
  media={${imageComponent(782, 518)}}
  info={
    <div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.smallTitle}>Stacked</Text>
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

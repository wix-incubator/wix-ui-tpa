export const importExample = `import { StripCard } from 'wix-ui-tpa/StripCard';`;

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

export const strip = `
<StripCard 
  media={${imageComponent(100, 100)}}
  info={
    <Text typography={TYPOGRAPHY.smallTitle}>STRIP</Text>
  }
/>
`;

export const stripOnlyInfo = `
<StripCard 
  info={
    <div>
      <Text tagName="div" typography={TYPOGRAPHY.smallTitle}>ONLY INFO</Text>    
      <Text typography={TYPOGRAPHY.runningText}>The content spreads across the Card</Text>    
    </div>
  }
/>
`;

export const minHeight = `
<StripCard 
  info={
    <Text typography={TYPOGRAPHY.runningText}>Minimum Height 92px</Text>
  }
/>
`;

export const roundMedia = `
<StripCard 
  media={${imageComponent(100, 100)}}
  roundMedia
  info={
    <div>
      <Text tagName="div" typography={TYPOGRAPHY.smallTitle}>ROUND MEDIA</Text>
      <Text typography={TYPOGRAPHY.runningText}>Media container is rounded</Text>
    </div>
  }
/>
`;

export const withoutSidePadding = `
<StripCard 
  media={${imageComponent(100, 100)}}
  sidePadding={false}
  info={
    <div>
      <Text tagName="div" typography={TYPOGRAPHY.smallTitle}>WITHOUT SIDE PADDING</Text>
      <Text typography={TYPOGRAPHY.runningText}>Side padding set to 0px</Text>
    </div>
  }
/>
`;

export const noImageLoaded = `
<StripCard 
  media={<div/>}
  info={
    <div>
      <Text tagName="div" typography={TYPOGRAPHY.smallTitle}>MEDIA NOT AVAILABLE</Text>
    </div>
  }
/>
`;

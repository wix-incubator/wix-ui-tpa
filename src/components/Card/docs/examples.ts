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

export const sideBySide = `
<Card
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.smallTitle}>SIDE BY SIDE</Text>
      </div>
      <div style={{margin: '10px 0'}}><Divider/></div>
      <div style={{marginBottom: '5px'}}>
        <Text>min width 700px</Text>
      </div>
      <div style={{marginBottom: '5px'}}>
        <Text>info padding 60px</Text>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button >Book</Button>
      </div>
    </div>
  }/>
`;

export const stacked = `
<Card
  mediaAspectRatio={16/9}
  stacked
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <div style={{marginBottom: '10px'}}>
        <Text typography={TYPOGRAPHY.smallTitle}>STACKED</Text>
      </div>
      <div style={{margin: '10px 0'}}><Divider/></div>
      <div style={{marginBottom: '5px'}}>
        <Text>min width 130px</Text>
      </div>
      <div style={{marginBottom: '5px'}}>
        <Text>info padding 32px</Text>
      </div>
      <div style={{marginTop: '20px'}}>
        <Button >Book</Button>
      </div>
    </div>
  }/>
`;

export const ratio = `
<div>
<Card
  ratio={CardRatioOptions.RATIO_50_50}
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>50/50</Text>
    </div>
  }/>
  <Card
  ratio={CardRatioOptions.RATIO_40_60}
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>40/60</Text>
    </div>
  }/>
  <Card
  ratio={CardRatioOptions.RATIO_30_70}
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>30/70</Text>
    </div>
  }/>
</div>
`;

export const flippedRatio = `
<div>
<Card
  flippedRatio
  ratio={CardRatioOptions.RATIO_50_50}
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>50/50</Text>
    </div>
  }/>
  <Card
  flippedRatio
  ratio={CardRatioOptions.RATIO_40_60}
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>60/40</Text>
    </div>
  }/>
  <Card
  flippedRatio
  ratio={CardRatioOptions.RATIO_30_70}
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>70/30</Text>
    </div>
  }/>
</div>
`;

export const invertPosition = `
<Card
  ratio={CardRatioOptions.RATIO_40_60}
  invertInfoPosition
  media={${imageComponent(560, 330)}}
  info={
    <div>
      <Text typography={TYPOGRAPHY.largeTitle}>INVERT INFO MEDIA POSITIONS</Text>
    </div>
  }/>
`;

export const stackedMobile = `
<ExampleWithContextProps mobile={true}>
  <Card
    ratio={CardRatioOptions.RATIO_40_60}
    isMobile
    mediaAspectRatio={16 / 9}
    stacked
    media={${imageComponent(560, 330)}}
    info={
      <div>
        <Text typography={TYPOGRAPHY.largeTitle}>STACKED ON MOBILE</Text>
        <div style={{marginBottom: '5px'}}>
          <Text>min width 130px</Text>
        </div>
        <div style={{marginBottom: '5px'}}>
          <Text>info padding 20px</Text>
        </div>
      </div>
  }/>
</ExampleWithContextProps>
`;

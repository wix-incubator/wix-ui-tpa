export const importExample = `import { CardList } from 'wix-ui-tpa/CardList';`;

export const generateCardItems = (numOfCards) => `[
  ${Array(numOfCards)
    .fill(null)
    .map(
      (value, index) => `
      {
        item: 
          <Card
            stacked
            mediaAspectRatio={16/9}
            media={
              <div
               style={{
                  height: '100%',
                  backgroundImage: 'url(https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_560,h_320,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
              }}/>}
            info={
              <div>
                <Text typography={TYPOGRAPHY.largeTitle}>${index + 1}</Text>
              </div>
            }/>,
      }
    `,
    )}]`;

export const generateOverlappingCardItems = (numOfCards) => `[
  ${Array(numOfCards)
    .fill(null)
    .map(
      (value, index) => `
      {
        item: 
          <OverlappingCard
            media={
              <div
               style={{
                  height: '100%',
                  backgroundImage: 'url(https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_560,h_320,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
              }}/>}
            info={
              <div>
                <Text typography={TYPOGRAPHY.largeTitle}>${index + 1}</Text>
              </div>
            }/>,
      }
    `,
    )}]`;

export const generateStripCardItems = (numOfCards) => `[
  ${Array(numOfCards)
    .fill(null)
    .map(
      (value, index) => `
      {
        item: 
          <StripCard
            media={
              <div
               style={{
                  height: '100%',
                  backgroundImage: 'url(https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_560,h_320,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
              }}/>}
            info={
              <div>
                <Text typography={TYPOGRAPHY.largeTitle}>${index + 1}</Text>
              </div>
            }/>,
      }
    `,
    )}]`;

export const responsive = `
<CardList maxItemsPerRow={4} minItemWidth={200}   listWidth={5000} items={${generateCardItems(2)}} />
`;

export const maxItemsPerRow = `
<CardList
  maxItemsPerRow={4}
  listWidth={500}
  maxItemWidth={300}
  minItemWidth={100}
  withDivider
  items={${generateCardItems(9)}}
  />
`;

export const listOfStripCard = `
<CardList
  maxItemsPerRow={1}
  listWidth={700}
  items={${generateStripCardItems(3)}}
  />
`;

export const withDividers = `
<CardList
  maxItemsPerRow={1}
  listWidth={700}
  withDivider
  items={${generateStripCardItems(3)}}
  />
`;

export const listOfOverlappingCard = `
<CardList
  maxItemsPerRow={1}
  listWidth={700}
  items={${generateOverlappingCardItems(3)}}
  />
`;

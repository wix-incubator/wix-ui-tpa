export const importExample = `import { Grid } from 'wix-ui-tpa/Grid';`;

export const generateCardItems = (
  numOfCards,
  colSpanDecorator: (index?) => number = () => 1,
  rowSpanDecorator: (index?) => number = () => 1,
) =>
  Array(numOfCards)
    .fill(null)
    .map(
      (value, index) => `
      {
        colSpan: ${colSpanDecorator(index)},
        rowSpan: ${rowSpanDecorator(index)},
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
    );

export const generateOverlappingCardItems = numOfCards =>
  Array(numOfCards)
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
    );

export const generateStripCardItems = numOfCards =>
  Array(numOfCards)
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
    );

export const responsive = `
<Grid maxColumns={4} minColumnWidth={200}   listWidth={5000} items={[${generateCardItems(
  2,
)}]} />
`;

export const quilted = `
<Grid
  maxColumns={4}
  minColumnWidth={20}
  listWidth={500}
  rowGap={4}
  columnGap={4}
  items={[${generateCardItems(
    8,
    index => [2, 1, 1, 2, 2, 2, 1, 1][index],
    index => [2, 1, 1, 1, 1, 2, 1, 1][index],
  )}]} />
`;

export const maxColumns = `
<Grid
  maxColumns={4}
  listWidth={500}
  maxColumnWidth={300}
  minColumnWidth={100}
  withDivider
  items={[${generateCardItems(9)}]}
  />
`;

export const listOfStripCard = `
<Grid
  maxColumns={1}
  listWidth={700}
  minColumnWidth={500}
  items={[${generateStripCardItems(3)}]}
  />
`;

export const withDividers = `
<Grid
  maxColumns={1}
  listWidth={700}
  minColumnWidth={500}
  withDivider
  items={[${generateStripCardItems(3)}]}
  />
`;

export const listOfOverlappingCard = `
<Grid
  maxColumns={1}
  listWidth={700}
  minColumnWidth={500}
  items={[${generateOverlappingCardItems(3)}]}
  />
`;

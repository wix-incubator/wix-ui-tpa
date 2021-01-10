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
<Grid.Item colSpan={${colSpanDecorator(index)}} rowSpan={${rowSpanDecorator(
        index,
      )}}>
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
  }/> 
</Grid.Item>
`,
    )
    .reduce((acc, item) => acc + item, '');

export const generateOverlappingCardItems = (
  numOfCards,
  colSpanDecorator: (index?) => number = () => 1,
  rowSpanDecorator: (index?) => number = () => 1,
) =>
  Array(numOfCards)
    .fill(null)
    .map(
      (value, index) => `
<Grid.Item colSpan={${colSpanDecorator(index)}} rowSpan={${rowSpanDecorator(
        index,
      )}}>
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
    }/>
</Grid.Item>
`,
    )
    .reduce((acc, item) => acc + item, '');

export const generateStripCardItems = (
  numOfCards,
  colSpanDecorator: (index?) => number = () => 1,
  rowSpanDecorator: (index?) => number = () => 1,
) =>
  Array(numOfCards)
    .fill(null)
    .map(
      (value, index) => `
<Grid.Item colSpan={${colSpanDecorator(index)}} rowSpan={${rowSpanDecorator(
        index,
      )}}>
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
    }/>
</Grid.Item>
`,
    )
    .reduce((acc, item) => acc + item, '');

export const responsive = `
<Grid maxColumns={3} minColumnWidth={250}>
  ${generateCardItems(4)}
</Grid>
`;

export const quiltedRows = `
<Grid
  maxColumns={3}
  minColumnWidth={20}
  width={500}
  rowGap={4}
  columnGap={4}>
  ${generateCardItems(
    7,
    () => 1,
    (index) => [2, 1, 1, 1, 2, 1, 1][index],
  )}
</Grid>
`;

export const quiltedColumns = `
<Grid
  maxColumns={4}
  minColumnWidth={20}
  width={500}
  rowGap={4}
  columnGap={4}>
  ${generateCardItems(
    6,
    (index) => [2, 1, 1, 1, 1, 2][index],
    () => 1,
  )}
</Grid>
`;

export const maxColumns = `
<Grid
  maxColumns={4}
  width={500}
  maxColumnWidth={300}
  minColumnWidth={Card.MIN_WIDTH_MOBILE}
  showRowDivider
>
  ${generateCardItems(9)}
</Grid>
`;

export const listOfStripCard = `
<Grid
  maxColumns={1}
  width={700}
  minColumnWidth={500}
>
  ${generateStripCardItems(3)}
</Grid>
`;

export const showRowDividers = `
<Grid
  maxColumns={1}
  width={700}
  minColumnWidth={StripCard.MIN_WIDTH}
  showRowDivider
>
  ${generateStripCardItems(3)}
</Grid>
`;

export const listOfOverlappingCard = `
<Grid
  maxColumns={1}
  width={700}
  minColumnWidth={OverlappingCard.MIN_WIDTH}
>
  ${generateOverlappingCardItems(3)}
</Grid>
`;

export const importExample = `import { ThumbnailImage } from 'wix-ui-tpa/ThumbnailImage';`;

export const basicExample = `
<ThumbnailImage
  src="c5f754_f4ccb2e3ed75479dbfd55e02ef9c47e8~mv2.png"
  width={300}
  height={300}
  alt="One narrow vase with two wide vases"
/>
`;

export const cardExample = `
<Card upgrade stacked>
  <Card.Container>
    <ThumbnailImage
      src="c5f754_f4ccb2e3ed75479dbfd55e02ef9c47e8~mv2.png"
        width={300}
  height={300}
      alt="One narrow vase with two wide vases"
    />
  </Card.Container>
  <Card.Container>
    <div
      style={{
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Text typography={TYPOGRAPHY.smallTitle}>Pottery Class</Text>
      <div style={{ margin: '20px' }}>
        <Divider />
      </div>
      <div style={{ margin: '20px' }}>
        <Text>$20 | 1 Hour</Text>
      </div>
      <Button
        aria-label="Add To Cart Button"
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        Book Now
      </Button>
    </div>
  </Card.Container>
</Card>
`;

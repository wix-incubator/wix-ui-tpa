import * as React from 'react';

const mediaImage = `<img src="product.png" alt="My product" width={400} height={520}/>`;
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

export const defaultExample = `() => (
  <Card upgrade className={st(classes.root)}>
    <Card.Container className={classes.media}>{${mediaImage}}</Card.Container>
    <Card.Container className={classes.info}>
      <>
        <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>My Product</Text>
        <Text typography={TYPOGRAPHY.runningText} className={classes.text}>${loremIpsum}</Text>
      </>
    </Card.Container>
  </Card>
)`;

export const stackedExample = `() => (
  <Card upgrade className={st(classes.root, {}, classes.stacked)} stacked>
    <Card.Container className={classes.media}>{${mediaImage}}</Card.Container>
    <Card.Container className={classes.info}>
      <>
        <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>My Product</Text>
        <Text typography={TYPOGRAPHY.runningText} className={classes.text}>${loremIpsum}</Text>
      </>
    </Card.Container>
  </Card>
)`;

export const minWidthExample = `
  <div style={{overflow: 'hidden', resize: 'horizontal', padding: 10}}>
  <div style={{display: 'inline'}}>
    <Card upgrade className={st(classes.root, {}, classes.wrap)}>
      <Card.Container minWidth={300} className={classes.media}>
        {${mediaImage}}
      </Card.Container>
      <Card.Container minWidth={300} className={classes.info}>
        <>
          <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>My Product</Text>
          <Text typography={TYPOGRAPHY.runningText} className={classes.text}>${loremIpsum}</Text>
        </>
      </Card.Container>
    </Card>
    </div>
  </div>
`;

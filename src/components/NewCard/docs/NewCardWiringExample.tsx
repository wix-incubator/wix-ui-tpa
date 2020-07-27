import * as React from 'react';
import { Text, TYPOGRAPHY } from '../../Text';
import { Card } from '../../Card';
import { classes } from './NewCardWiringExample.st.css';

const image = (
  <img
    src="https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_791,h_317,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg"
    alt="Achla Image"
  />
);

const mediaContainer = (
  <div
    style={{
      height: '100%',
    }}
  >
    {image}
  </div>
);

export const ExampleDefault = () => (
  <Card upgrade className={classes.card}>
    <Card.Container className={classes.media}>{mediaContainer}</Card.Container>
    <Card.Container className={classes.info}>
      <>
        <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
        <br />
        <Text typography={TYPOGRAPHY.runningText}>
          And boy, you got me walkin' side to side
        </Text>
      </>
    </Card.Container>
  </Card>
);

export const ExampleStacked = () => (
  <Card upgrade className={classes.card} stacked>
    <Card.Container className={classes.media}>{mediaContainer}</Card.Container>
    <Card.Container className={classes.info}>
      <>
        <Text typography={TYPOGRAPHY.smallTitle}>Stacked layout</Text>
        <br />
        <Text typography={TYPOGRAPHY.runningText}>
          And boy, you got me walkin' stacked to stacked
        </Text>
      </>
    </Card.Container>
  </Card>
);

export const ExampleMinWidth = () => (
  <Card upgrade className={classes.card}>
    <Card.Container minWidth={300} className={classes.media}>
      {mediaContainer}
    </Card.Container>
    <Card.Container minWidth={300} className={classes.info}>
      <>
        <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
        <br />
        <Text typography={TYPOGRAPHY.runningText}>
          I have minWidth={300} and media block have minWidth={300}
        </Text>
      </>
    </Card.Container>
  </Card>
);

export const NewCardWiringExample = () => {
  return (
    <div className={classes.root}>
      <section className={classes.exampleSection}>
        <Text typography={TYPOGRAPHY.smallTitle}>Default Card</Text>

        <ExampleDefault />
      </section>

      <section className={classes.exampleSection}>
        <Text typography={TYPOGRAPHY.smallTitle}>
          Default <i>Stacked</i> Card
        </Text>

        <ExampleStacked />
      </section>

      <section className={classes.exampleSection}>
        <Text typography={TYPOGRAPHY.smallTitle}>Containers with minWidth</Text>

        <ExampleMinWidth />
      </section>
    </div>
  );
};

NewCardWiringExample.displayName = 'NewCardExample';

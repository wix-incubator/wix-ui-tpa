import * as React from 'react';
import { NewCard } from '..';
import styles from './NewCardExample.st.css';
import { Text, TYPOGRAPHY } from '../../Text';

const image = (
  <img
    src="https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_791,h_317,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg"
    alt=""
  />
);

const media = (
  <div
    style={{
      height: '100%',
    }}
  >
    {image}
  </div>
);

export class NewCardExample extends React.Component {
  render() {
    return (
      <div {...styles('root', {}, this.props)}>
        <NewCard className={styles.card + ' ' + styles.example1}>
          <NewCard.Container className={styles.media} minWidth={300}>
            {media}
          </NewCard.Container>
          <NewCard.Container className={styles.info} minWidth={200}>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                I have 200px min-width, and the media has 300px min-width, so I
                break when the total width is &lt; 500px
              </Text>
            </div>
          </NewCard.Container>
        </NewCard>

        <br />
        <br />

        <NewCard className={styles.card + ' ' + styles.example1}>
          <NewCard.Container minWidth={200} className={styles.info}>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>
                Side By Side - flipped
              </Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                I have 200px min-width, and the media has 300px min-width, so I
                break when the total width is &lt; 500px
              </Text>
            </div>
          </NewCard.Container>
          <NewCard.Container className={styles.media} minWidth={300}>
            {media}
          </NewCard.Container>
        </NewCard>

        <br />
        <br />

        <NewCard className={styles.card + ' ' + styles.example2} stacked>
          <NewCard.Container className={styles.media}>
            {media}
          </NewCard.Container>
          <NewCard.Container className={styles.info}>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Stacked</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                My width can grow and shrink
              </Text>
            </div>
          </NewCard.Container>
        </NewCard>

        <br />
        <br />

        <NewCard className={styles.card + ' ' + styles.example3}>
          <NewCard.Container className={styles.media}>
            {media}
          </NewCard.Container>
          <NewCard.Container className={styles.info}>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Strip card</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>Yes we can!</Text>
            </div>
          </NewCard.Container>
        </NewCard>

        <br />
        <br />

        <NewCard className={styles.card + ' ' + styles.dugma}>
          <NewCard.Container className={styles.media} minWidth={300}>
            {media}
          </NewCard.Container>
          <NewCard.Container className={styles.info} minWidth={200}>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>
                Side By Side - Only root container has border
              </Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                I have 200px min-width, and the media has 300px min-width, so I
                break when the total width is &lt; 500px
              </Text>
            </div>
          </NewCard.Container>
        </NewCard>

        <br />
        <br />

        <NewCard className={styles.card + ' ' + styles.overlapping}>
          <NewCard.Container className={styles.media} minWidth={300}>
            {image}
          </NewCard.Container>
          <NewCard.Container className={styles.info} minWidth={200}>
            <div className={styles.overlapContent}>
              <Text typography={TYPOGRAPHY.smallTitle}>Overlapping</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                I have 200px min-width, and the media has 300px min-width, so I
                break when the total width is &lt; 500px
              </Text>
            </div>
          </NewCard.Container>
        </NewCard>
      </div>
    );
  }
}

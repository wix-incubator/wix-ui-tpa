import * as React from 'react';
import { NewCard } from '..';
import styles from './NewCardExample.st.css';
import { Text, TYPOGRAPHY } from '../../Text';

const media = (
  <div
    style={{
      height: '100%',
    }}
  >
    <img
      src="https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_791,h_317,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg"
      alt=""
    />
  </div>
);

export class NewCardExample extends React.Component {
  render() {
    return (
      <div>
        <NewCard {...styles('example1', {}, this.props)}>
          <NewCard.MediaContainer minWidth={300}>
            {media}
          </NewCard.MediaContainer>
          <NewCard.InfoContainer minWidth={200}>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                I have 200px min-width, and the media has 300px min-width, so I
                break when the total width is &lt; 500px
              </Text>
            </div>
          </NewCard.InfoContainer>
        </NewCard>

        <br />
        <br />

        <NewCard {...styles('example2', {}, this.props)} stacked>
          <NewCard.MediaContainer>{media}</NewCard.MediaContainer>
          <NewCard.InfoContainer>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Stacked</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>
                My width can grow and shrink
              </Text>
            </div>
          </NewCard.InfoContainer>
        </NewCard>

        <br />
        <br />

        <NewCard {...styles('example3', {}, this.props)}>
          <NewCard.MediaContainer>{media}</NewCard.MediaContainer>
          <NewCard.InfoContainer>
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Strip card</Text>
              <br />
              <Text typography={TYPOGRAPHY.runningText}>Yes we can!</Text>
            </div>
          </NewCard.InfoContainer>
        </NewCard>
      </div>
    );
  }
}

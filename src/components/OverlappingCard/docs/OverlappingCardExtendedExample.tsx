import * as React from 'react';
import { OverlappingCard } from '../index';
import { classes } from './OverlappingCardExtendedExample.st.css';
import { TYPOGRAPHY, Text } from '../../Text';
import { Divider } from '../../Divider';
import { Button } from '../../Button';

export const CardExtendedExample = (props) => (
  <div>
    <OverlappingCard
      media={
        <div
          style={{
            height: '100%',
            backgroundImage:
              'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_852,h_382,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        />
      }
      info={
        <div>
          <div style={{ marginBottom: '10px' }}>
            <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Text typography={TYPOGRAPHY.runningText}>Tagline</Text>
          </div>
          <div style={{ margin: '10px 0' }}>
            <Divider />
          </div>
          <div style={{ marginBottom: '5px' }}>
            <Text typography={TYPOGRAPHY.runningText}>
              Lorem ipsum dolor sit amet.
            </Text>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <Text typography={TYPOGRAPHY.runningText}>
              Lorem ipsum dolor sit amet.
            </Text>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button>Book</Button>
          </div>
        </div>
      }
      {...props}
      className={classes.card}
    />
  </div>
);

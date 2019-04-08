import * as React from 'react';
import { OverlappingCard } from '../index';
import extendedStyles from './OverlappingCardExtendedExample.st.css';
import { TYPOGRAPHY, Text } from '../../Text';
import { Divider } from '../../Divider';
import { Button } from '../../Button';

export const CardExtendedExample = props => (
  <div>
    <OverlappingCard
      media={
        <div
          style={{
            height: '100%',
            backgroundImage: 'url(https://picsum.photos/852/388)',
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
      {...extendedStyles('card', {}, props)}
    />
  </div>
);

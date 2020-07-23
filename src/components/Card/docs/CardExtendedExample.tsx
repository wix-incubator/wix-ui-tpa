import * as React from 'react';
import { Card } from '../index';
import { classes } from './CardExtendedExample.st.css';
import { TYPOGRAPHY, Text } from '../../Text';
import { TPAComponentsWrapper } from '../../../test/utils';

const media = (
  <div
    style={{
      height: '100%',
      backgroundImage:
        'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_791,h_317,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    }}
  />
);

export const CardExtendedExample = props => (
  <div>
    <div style={{ width: `${Card.MIN_WIDTH}px` }}>
      <Card
        media={media}
        info={
          <div>
            <Text typography={TYPOGRAPHY.smallTitle}>Side By Side</Text>
          </div>
        }
        {...props}
        className={classes.card}
      />
    </div>
    <div style={{ width: `${Card.MIN_WIDTH_MOBILE + 170}px` }}>
      <Card
        stacked
        mediaAspectRatio={16 / 9}
        media={media}
        info={
          <div>
            <Text typography={TYPOGRAPHY.smallTitle}>Stacked</Text>
          </div>
        }
        {...props}
        className={classes.card}
      />
    </div>
    <div style={{ width: `${Card.MIN_WIDTH_MOBILE}px` }}>
      {TPAComponentsWrapper({ mobile: true })(
        <Card
          stacked
          mediaAspectRatio={16 / 9}
          media={media}
          info={
            <div>
              <Text typography={TYPOGRAPHY.smallTitle}>Stacked Mobile</Text>
            </div>
          }
          {...props}
          className={classes.card}
        />,
      )}
    </div>
  </div>
);

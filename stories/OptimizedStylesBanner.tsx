import * as React from 'react';
import LinkTo from '@storybook/addon-links/react';

const styles = {
  background: '#60BC57',
  color: 'white',
  width: '520px',
  padding: '12px',
  borderRadius: '12px',
  fontFamily: 'sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1.4,
};

export const OptimizedStylesBanner: React.FC = () => (
  <div style={styles}>
    This component supports the optimized API for style params overriding,
    please refer to the usage doc under the{' '}
    <LinkTo
      kind={'Getting Started'}
      story="Using the library"
      style={{ color: 'darkslategray' }}
    >
      "An optimized way for style overriding"
    </LinkTo>
  </div>
);

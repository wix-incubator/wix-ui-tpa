import * as React from 'react';
import { TPAComponentsProvider } from '../components/TPAComponentsConfig';
import { MobileExample } from '../../stories/utils/MobileExample';

export const VisualTestWrapper: React.FC<{
  isMobile?: boolean;
  isRtl?: boolean;
}> = ({ isMobile, isRtl, children }) => {
  return (
    <>
      {isMobile ? (
        <MobileExample isRtl={isRtl}>
          <div dir={isRtl ? 'rtl' : 'ltr'}>{children}</div>
        </MobileExample>
      ) : (
        <TPAComponentsProvider value={{ mobile: false, rtl: isRtl }}>
          <div dir={isRtl ? 'rtl' : 'ltr'}>{children}</div>
        </TPAComponentsProvider>
      )}
    </>
  );
};

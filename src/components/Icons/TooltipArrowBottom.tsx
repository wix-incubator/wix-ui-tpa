/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TooltipArrowBottomProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const TooltipArrowBottom: React.SFC<TooltipArrowBottomProps> = ({size, ...props}) => (
  <svg viewBox="0 0 12 7" fill="currentColor" width={ size || "12" } height={ size || "7" } {...props}>
    <g fill="none">
      <path d="M6.7592566,0.349226756 L12,6.46342739 L-8.52651283e-14,6.46342739 L5.2407434,0.349226756 C5.60016555,-0.0700990862 6.23146553,-0.118660623 6.65079137,0.240761528 C6.68967018,0.27408622 6.72593191,0.310347949 6.7592566,0.349226756 Z"
        fill="#212121" transform="matrix(-1 0 0 1 12 .537)" />
      <path d="M0,-1.22124533e-13 L1,6.15771224e-14 L6,5.8 L11,-3.02737051e-14 L12,-1.22124533e-13 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,-1.22124533e-13 Z"
        fill="#757575" transform="matrix(1 0 0 -1 0 7)" />
    </g>
  </svg>
);
TooltipArrowBottom.displayName = 'TooltipArrowBottom';
/* tslint:enable */
/* eslint-enable */

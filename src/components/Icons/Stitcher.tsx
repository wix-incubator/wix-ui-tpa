/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface StitcherProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Stitcher: React.SFC<StitcherProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#fff" d="M4,9 L4,17 L0,17 L0,9 L4,9 Z M14,9 L14,17 L10,17 L10,9 L14,9 Z M9,8 L9,16 L5,16 L5,8 L9,8 Z M19,7 L19,16 L15,16 L15,7 L19,7 Z M24,9 L24,15 L20,15 L20,9 L24,9 Z"
      />
      <path fill="#000" d="M4,9 L4,17 L0,17 L0,9 L4,9 Z M14,9 L14,17 L10,17 L10,9 L14,9 Z M9,8 L9,16 L5,16 L5,8 L9,8 Z M19,7 L19,16 L15,16 L15,7 L19,7 Z M24,9 L24,15 L20,15 L20,9 L24,9 Z"
      />
    </g>
  </svg>
);
Stitcher.displayName = 'Stitcher';
/* tslint:enable */
/* eslint-enable */

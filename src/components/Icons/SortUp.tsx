/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SortUpProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const SortUp: React.SFC<SortUpProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M5,1.6 L7.2,3.5 C7.4,3.7 7.7,3.7 7.9,3.5 C7.9,3.5 7.9,3.5 7.9,3.5 L7.9,3.5 C8.1,3.2 8,2.9 7.8,2.7 L4.8,0.1 C4.8,0.1 4.7,8.32667268e-17 4.6,8.32667268e-17 C4.5,8.32667268e-17 4.3,8.32667268e-17 4.2,0.1 C4.2,0.1 4.2,0.1 4.2,0.1 L1.2,2.7 C1,2.9 0.9,3.2 1.1,3.4 L1.1,3.4 C1.3,3.6 1.6,3.6 1.8,3.5 C1.8,3.5 1.8,3.5 1.8,3.5 L4,1.6 L4,13.5 C4,13.8 4.2,14 4.5,14 C4.8,14 5,13.8 5,13.5 L5,1.6 Z"
      transform="translate(8 5)" fill="#000" fillRule="nonzero" />
  </svg>
);
SortUp.displayName = 'SortUp';
/* tslint:enable */
/* eslint-enable */

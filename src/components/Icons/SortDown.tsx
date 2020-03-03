/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SortDownProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const SortDown: React.SFC<SortDownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M5,12.4 L7.2,10.5 C7.4,10.3 7.7,10.3 7.9,10.5 C7.9,10.5 7.9,10.5 7.9,10.5 L7.9,10.5 C8.1,10.7 8,11 7.8,11.2 L4.8,13.8 C4.8,13.8 4.7,13.9 4.6,13.9 C4.4,14 4.2,14 4.1,13.9 C4.1,13.9 4.1,13.9 4.1,13.9 L1.1,11.3 C0.9,11.1 0.9,10.8 1,10.6 L1,10.6 C1.2,10.4 1.5,10.4 1.7,10.5 C1.7,10.5 1.7,10.5 1.7,10.5 L4,12.4 L4,0.5 C4,0.2 4.2,0 4.5,0 C4.8,0 5,0.2 5,0.5 L5,12.4 Z"
      transform="translate(8 5)" fill="#000" fillRule="nonzero" />
  </svg>
);
SortDown.displayName = 'SortDown';
/* tslint:enable */
/* eslint-enable */

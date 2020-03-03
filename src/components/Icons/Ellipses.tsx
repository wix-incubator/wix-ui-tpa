/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface EllipsesProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Ellipses: React.SFC<EllipsesProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M1.4,9.5 C0.6,9.5 0,8.8 0,8 C0,7.2 0.7,6.5 1.5,6.5 C2.3,6.5 3,7.2 3,8 C3,8.8 2.3,9.5 1.4,9.5 L1.4,9.5 Z M1.4,3 C0.6,3 0,2.3 0,1.5 C0,0.7 0.7,0 1.5,0 C2.3,0 3,0.7 3,1.5 C3,2.3 2.3,3 1.4,3 L1.4,3 Z M1.6,13 C2.4,13 3,13.7 3,14.5 C3,15.3 2.3,16 1.5,16 C0.7,16 0,15.3 0,14.5 C0,13.7 0.7,13 1.6,13 L1.6,13 Z"
      transform="translate(11 4)" fill="#000" opacity=".8" fillRule="nonzero" />
  </svg>
);
Ellipses.displayName = 'Ellipses';
/* tslint:enable */
/* eslint-enable */

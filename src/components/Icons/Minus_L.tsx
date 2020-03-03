/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Minus_LProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Minus_L: React.SFC<Minus_LProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" d="M4 11.2H20V12.799999999999999H4z" fillRule="nonzero" />
  </svg>
);
Minus_L.displayName = 'Minus_L';
/* tslint:enable */
/* eslint-enable */

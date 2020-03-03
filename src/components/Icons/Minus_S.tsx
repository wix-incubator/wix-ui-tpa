/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Minus_SProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Minus_S: React.SFC<Minus_SProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" d="M6 12.5L6 11.5 18 11.5 18 12.5z" fillRule="nonzero" />
  </svg>
);
Minus_S.displayName = 'Minus_S';
/* tslint:enable */
/* eslint-enable */

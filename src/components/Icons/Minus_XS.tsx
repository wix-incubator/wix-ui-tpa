/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Minus_XSProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Minus_XS: React.SFC<Minus_XSProps> = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path fill="#000" d="M4 8.5L4 7.5 12 7.5 12 8.5z" fillRule="nonzero" />
  </svg>
);
Minus_XS.displayName = 'Minus_XS';
/* tslint:enable */
/* eslint-enable */

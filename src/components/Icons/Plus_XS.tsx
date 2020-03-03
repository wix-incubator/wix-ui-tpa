/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Plus_XSProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Plus_XS: React.SFC<Plus_XSProps> = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path fill="#000" d="M8.5 7.5L12 7.5 12 8.5 8.5 8.5 8.5 12 7.5 12 7.5 8.5 4 8.5 4 7.5 7.5 7.5 7.5 4 8.5 4z" fillRule="nonzero" />
  </svg>
);
Plus_XS.displayName = 'Plus_XS';
/* tslint:enable */
/* eslint-enable */

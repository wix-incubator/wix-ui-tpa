/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Close_LProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Close_L: React.SFC<Close_LProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" d="M12 11.1L17.1 6 18 6.9 12.9 12 18 17.1 17.1 18 12 12.9 6.9 18 6 17.1 11.1 12 6 6.9 6.9 6z" fillRule="nonzero" />
  </svg>
);
Close_L.displayName = 'Close_L';
/* tslint:enable */
/* eslint-enable */

/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Plus_LProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Plus_L: React.SFC<Plus_LProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" d="M12.8 11.2L20 11.2 20 12.8 12.8 12.8 12.8 20 11.2 20 11.2 12.8 4 12.8 4 11.2 11.2 11.2 11.2 4 12.8 4z" fillRule="nonzero" />
  </svg>
);
Plus_L.displayName = 'Plus_L';
/* tslint:enable */
/* eslint-enable */

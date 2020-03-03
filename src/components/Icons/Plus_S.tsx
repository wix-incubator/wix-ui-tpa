/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Plus_SProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Plus_S: React.SFC<Plus_SProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" d="M12.5 11.5L18 11.5 18 12.5 12.5 12.5 12.5 18 11.5 18 11.5 12.5 6 12.5 6 11.5 11.5 11.5 11.5 6 12.5 6z" fillRule="nonzero" />
  </svg>
);
Plus_S.displayName = 'Plus_S';
/* tslint:enable */
/* eslint-enable */

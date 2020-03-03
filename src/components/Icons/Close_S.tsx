/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Close_SProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Close_S: React.SFC<Close_SProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M4 3.4L7.4 0 8 0.6 4.6 4 8 7.4 7.4 8 4 4.6 0.6 8 0 7.4 3.4 4 0 0.6 0.6 0z" transform="translate(8 8)" fill="#333" fillRule="evenodd" />
  </svg>
);
Close_S.displayName = 'Close_S';
/* tslint:enable */
/* eslint-enable */

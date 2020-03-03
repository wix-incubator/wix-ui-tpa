/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ShareProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Share: React.SFC<ShareProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M15.2,6.4 L19.7,11.1 L15.2,15.8 L15.2,14.9 L15.2,14.1 L14.4,13.9 C13.6,13.7 12.9,13.6 12.1,13.6 C9.2,13.6 6.4,14.8 4.4,16.8 C6.6,8.5 13.3,8 14.2,8 L15.1,8 L15.1,7.1 L15.1,6.4 L15.2,6.4 Z M14.3,7.1 C12.2,7.2 3.7,8.6 3,21 C4.5,17.2 8.1,14.7 12.2,14.7 C12.9,14.7 13.5,14.8 14.3,14.9 L14.3,18.2 L21,11.1 L14.3,4 L14.3,7.1 Z"
      stroke="#000" fill="#000" strokeWidth=".1" fillRule="nonzero" />
  </svg>
);
Share.displayName = 'Share';
/* tslint:enable */
/* eslint-enable */

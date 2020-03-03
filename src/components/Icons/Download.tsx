/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DownloadProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Download: React.SFC<DownloadProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M13,16 L15.2,14.1 C15.4,13.9 15.7,13.9 15.9,14.1 C15.9,14.1 15.9,14.1 15.9,14.1 L15.9,14.1 C16.1,14.3 16,14.6 15.8,14.8 L12.8,17.4 C12.8,17.4 12.7,17.5 12.6,17.5 C12.4,17.6 12.2,17.6 12.1,17.5 C12.1,17.5 12.1,17.5 12.1,17.5 L9.1,14.9 C8.9,14.7 8.9,14.4 9,14.2 L9,14.2 C9.3,14 9.6,14 9.8,14.1 C9.8,14.1 9.8,14.1 9.8,14.1 L12,16 L12,4.5 C12,4.2 12.2,4 12.5,4 C12.8,4 13,4.2 13,4.5 L13,16 Z M19,20.5 C19,20.8 18.8,21 18.5,21 L6.5,21 C6.2,21 6,20.8 6,20.5 C6,20.2 6.2,20 6.5,20 L18.5,20 C18.8,20 19,20.2 19,20.5 Z"
      fill="#000" fillRule="nonzero" />
  </svg>
);
Download.displayName = 'Download';
/* tslint:enable */
/* eslint-enable */

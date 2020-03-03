/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DeleteProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Delete: React.SFC<DeleteProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M16.7,7 L16.7,17.7 C16.7,18.3 16.5,18.9 16.1,19.4 C15.7,19.9 15.1,20.2 14.4,20.2 L7.8,20.2 C7.2,20.2 6.5,19.9 6.2,19.4 C5.8,18.9 5.6,18.3 5.6,17.7 L5.6,7 L4.1,7 L4.1,6 L7.9,6 L7.9,4.2 C7.9,3.9 8.1,3.7 8.4,3.7 L13.9,3.7 C14.2,3.7 14.4,3.9 14.4,4.2 L14.4,6 L18.2,6 L18.2,7 L16.7,7 Z M8.9,6 L13.4,6 L13.4,4.7 L8.9,4.7 L8.9,6 Z M15.7,17.7 L15.7,7 L6.6,7 L6.6,17.7 C6.6,18.1 6.7,18.5 7,18.8 C7.2,19.1 7.5,19.2 7.9,19.2 L14.5,19.2 C14.8,19.2 15.2,19 15.4,18.8 C15.6,18.5 15.7,18.1 15.7,17.7 Z"
      fill="#000" fillRule="nonzero" />
  </svg>
);
Delete.displayName = 'Delete';
/* tslint:enable */
/* eslint-enable */

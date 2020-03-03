/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DeleteItemProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const DeleteItem: React.SFC<DeleteItemProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx="10" cy="10" r="10" />
      <circle fill="#FFF" cx="10" cy="10" r="10" />
      <g fill="#000">
        <path d="M13.3846154,6 L14,6.61538462 L10.615,10 L14,13.3846154 L13.3846154,14 L10,10.615 L6.61538462,14 L6,13.3846154 L9.384,10 L6,6.61538462 L6.61538462,6 L10,9.385 L13.3846154,6 Z"
        />
      </g>
    </g>
  </svg>
);
DeleteItem.displayName = 'DeleteItem';
/* tslint:enable */
/* eslint-enable */

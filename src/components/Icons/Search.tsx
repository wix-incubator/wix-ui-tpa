/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SearchProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Search: React.SFC<SearchProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M15.7,14.6 L19,17.9 C19.1,18 19.1,18.1 19,18.2 L18.2,19 C18.1,19.1 18,19.1 17.9,19 L14.6,15.7 C13.6,16.5 12.3,16.9 11,16.9 C7.7,16.9 5,14.2 5,10.9 C5,7.6 7.7,4.9 11,4.9 C14.3,4.9 17,7.6 17,10.9 C16.9,12.3 16.5,13.6 15.7,14.6 Z M11,15.8 C13.7,15.8 15.9,13.6 15.9,10.9 C15.9,8.2 13.6,6.1 11,6.1 C8.4,6.1 6.1,8.3 6.1,11 C6.1,13.7 8.3,15.8 11,15.8 Z"
      fill="#333" fillRule="nonzero" />
  </svg>
);
Search.displayName = 'Search';
/* tslint:enable */
/* eslint-enable */

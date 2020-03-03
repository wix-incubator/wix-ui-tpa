/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ErrorProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Error: React.SFC<ErrorProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <g stroke="#F64D43" fill="none" fillRule="evenodd">
      <path d="M9 17.5C4.3 17.5.5 13.7.5 9 .5 4.3 4.3.5 9 .5 13.7.5 17.5 4.3 17.5 9 17.5 13.7 13.7 17.5 9 17.5zM9 17.5C13.7 17.5 17.5 13.7 17.5 9 17.5 4.3 13.7.5 9 .5 4.3.5.5 4.3.5 9 .5 13.7 4.3 17.5 9 17.5zM9 4L9 11M9 13L9 14"
        transform="translate(3 3)" />
    </g>
  </svg>
);
Error.displayName = 'Error';
/* tslint:enable */
/* eslint-enable */

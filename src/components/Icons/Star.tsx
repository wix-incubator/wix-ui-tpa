/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface StarProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Star: React.SFC<StarProps> = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="m12.266 14.297l-0.90882-5.0342 3.4161-3.0243-4.6333-0.31434-2.1533-4.7431-2.3321 4.8503-4.371 0.22401 3.7929 3.2232-1.2444 4.7647 4.1691-2.2809 4.2649 2.3345z"
      stroke="#000" fill="none" fillRule="evenodd" />
  </svg>
);
Star.displayName = 'Star';
/* tslint:enable */
/* eslint-enable */

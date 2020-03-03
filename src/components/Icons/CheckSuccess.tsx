/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CheckSuccessProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const CheckSuccess: React.SFC<CheckSuccessProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M13.3 0L14 0.7 5.3 10 0 5.8 0.6 5 5.2 8.7z" transform="translate(5 7)" fill="#57C487" fillRule="nonzero" />
  </svg>
);
CheckSuccess.displayName = 'CheckSuccess';
/* tslint:enable */
/* eslint-enable */

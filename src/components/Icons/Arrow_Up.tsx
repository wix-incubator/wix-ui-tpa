/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Arrow_UpProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Arrow_Up: React.SFC<Arrow_UpProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M11.9994992 9L6 14.2409396 6.65704031 15 11.9994992 10.3338926 17.3429597 15 18 14.2409396z" />
      <path fill="#000" d="M11.9994992 9L6 14.2409396 6.65704031 15 11.9994992 10.3338926 17.3429597 15 18 14.2409396z" />
    </g>
  </svg>
);
Arrow_Up.displayName = 'Arrow_Up';
/* tslint:enable */
/* eslint-enable */

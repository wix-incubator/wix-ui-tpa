/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Arrow_DownProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Arrow_Down: React.SFC<Arrow_DownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M11.9994992 9L6 14.2409396 6.65704031 15 11.9994992 10.3338926 17.3429597 15 18 14.2409396z" />
      <path fill="#000" transform="matrix(1 0 0 -1 0 24)" d="M11.9994992 9L6 14.2409396 6.65704031 15 11.9994992 10.3338926 17.3429597 15 18 14.2409396z" />
    </g>
  </svg>
);
Arrow_Down.displayName = 'Arrow_Down';
/* tslint:enable */
/* eslint-enable */

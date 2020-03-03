/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Arrow_Left_CenterProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Arrow_Left_Center: React.SFC<Arrow_Left_CenterProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" transform="matrix(0 1 1 0 0 0)" d="M11.9994992 9L6 14.2409396 6.65704031 15 11.9994992 10.3338926 17.3429597 15 18 14.2409396z" fillRule="evenodd"
    />
  </svg>
);
Arrow_Left_Center.displayName = 'Arrow_Left_Center';
/* tslint:enable */
/* eslint-enable */

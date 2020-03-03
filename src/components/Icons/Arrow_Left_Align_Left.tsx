/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Arrow_Left_Align_LeftProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Arrow_Left_Align_Left: React.SFC<Arrow_Left_Align_LeftProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" transform="matrix(0 1 1 0 -9 9)" d="M2.99949921 9L-3 14.2409396 -2.34295969 15 2.99949921 10.3338926 8.34295969 15 9 14.2409396z" fillRule="evenodd"
    />
  </svg>
);
Arrow_Left_Align_Left.displayName = 'Arrow_Left_Align_Left';
/* tslint:enable */
/* eslint-enable */

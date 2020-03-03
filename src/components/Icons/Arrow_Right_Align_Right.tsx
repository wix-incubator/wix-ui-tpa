/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface Arrow_Right_Align_RightProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Arrow_Right_Align_Right: React.SFC<Arrow_Right_Align_RightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path fill="#000" transform="matrix(0 -1 -1 0 33 33)" d="M20.9994992 9L15 14.2409396 15.6570403 15 20.9994992 10.3338926 26.3429597 15 27 14.2409396z" fillRule="evenodd"
    />
  </svg>
);
Arrow_Right_Align_Right.displayName = 'Arrow_Right_Align_Right';
/* tslint:enable */
/* eslint-enable */

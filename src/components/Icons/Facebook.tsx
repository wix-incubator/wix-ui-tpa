/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FacebookProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Facebook: React.SFC<FacebookProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <path d="M24,12 C24,5.37257813 18.6274219,0 12,0 C5.37257813,0 0,5.37257813 0,12 C0,17.9895469 4.38822656,22.9539844 10.125,23.8542188 L10.125,15.46875 L7.078125,15.46875 L7.078125,12 L10.125,12 L10.125,9.35625 C10.125,6.34875 11.9165156,4.6875 14.6575781,4.6875 C15.9704766,4.6875 17.34375,4.921875 17.34375,4.921875 L17.34375,7.875 L15.8305781,7.875 C14.3398828,7.875 13.875,8.80000781 13.875,9.74899219 L13.875,12 L17.203125,12 L16.6710938,15.46875 L13.875,15.46875 L13.875,23.8542188 C19.6117734,22.9539844 24,17.9895469 24,12"
      fill="#000" fillRule="evenodd" />
  </svg>
);
Facebook.displayName = 'Facebook';
/* tslint:enable */
/* eslint-enable */

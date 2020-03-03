/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CalendarProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
export const Calendar: React.SFC<CalendarProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "24" } height={ size || "24" } {...props}>
    <g fill="#000" fillRule="evenodd">
      <path d="M4,20 L20,20 L20,5 L4,5 L4,20 Z M5,8.001 L19,8.001 L19,6 L5,6 L5,8.001 Z M5,19 L19,19 L19,9 L5,9 L5,19 Z" />
      <path d="M7 13L9 13 9 11 7 11zM11 13L13 13 13 11 11 11zM15 13L17 13 17 11 15 11zM15 17L17 17 17 15 15 15zM11 17L13 17 13 15 11 15zM7 17L9 17 9 15 7 15z" />
    </g>
  </svg>
);
Calendar.displayName = 'Calendar';
/* tslint:enable */
/* eslint-enable */

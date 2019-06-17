import * as React from 'react';
import { Placement } from 'wix-ui-core/popover';

export const bottom: React.ReactNode = (
  <svg
    width="12px"
    height="7px"
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(6.000000, 3.500000) scale(1, -1) translate(-6.000000, -3.500000) ">
        <path
          d="M6.7592566,0.349226756 L12,6.46342739 L-8.52651283e-14,6.46342739 L5.2407434,0.349226756 C5.60016555,-0.0700990862 6.23146553,-0.118660623 6.65079137,0.240761528 C6.68967018,0.27408622 6.72593191,0.310347949 6.7592566,0.349226756 Z"
          fill="#212121"
          transform="translate(6.000000, 3.231714) rotate(180.000000) translate(-6.000000, -3.231714) "
        />
        <path
          d="M0,-1.22124533e-13 L1,6.15771224e-14 L6,5.8 L11,-3.02737051e-14 L12,-1.22124533e-13 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,-1.22124533e-13 Z"
          fill="#757575"
        />
      </g>
    </g>
  </svg>
);

export const left: React.ReactNode = (
  <svg
    width="7px"
    height="12px"
    viewBox="0 0 7 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(3.500000, 6.000000) scale(-1, 1) rotate(90.000000) translate(-3.500000, -6.000000) translate(-2.500000, 2.500000)">
        <path
          d="M6.7592566,0.349226756 L12,6.46342739 L-8.52651283e-14,6.46342739 L5.2407434,0.349226756 C5.60016555,-0.0700990862 6.23146553,-0.118660623 6.65079137,0.240761528 C6.68967018,0.27408622 6.72593191,0.310347949 6.7592566,0.349226756 Z"
          fill="#212121"
          transform="translate(6.000000, 3.231714) rotate(180.000000) translate(-6.000000, -3.231714) "
        />
        <path
          d="M0,-1.22124533e-13 L1,6.15771224e-14 L6,5.8 L11,-3.02737051e-14 L12,-1.22124533e-13 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,-1.22124533e-13 Z"
          fill="#757575"
        />
      </g>
    </g>
  </svg>
);

export const right: React.ReactNode = (
  <svg
    width="7px"
    height="12px"
    viewBox="0 0 7 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(3.500000, 6.000000) rotate(90.000000) translate(-3.500000, -6.000000) translate(-2.500000, 2.500000)">
        <path
          d="M6.7592566,0.349226756 L12,6.46342739 L-8.52651283e-14,6.46342739 L5.2407434,0.349226756 C5.60016555,-0.0700990862 6.23146553,-0.118660623 6.65079137,0.240761528 C6.68967018,0.27408622 6.72593191,0.310347949 6.7592566,0.349226756 Z"
          fill="#212121"
          transform="translate(6.000000, 3.231714) rotate(180.000000) translate(-6.000000, -3.231714) "
        />
        <path
          d="M0,-1.22124533e-13 L1,6.15771224e-14 L6,5.8 L11,-3.02737051e-14 L12,-1.22124533e-13 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,-1.22124533e-13 Z"
          fill="#757575"
        />
      </g>
    </g>
  </svg>
);

export const top: React.ReactNode = (
  <svg
    width="12px"
    height="7px"
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <path
          d="M6.7592566,0.349226756 L12,6.46342739 L-8.52651283e-14,6.46342739 L5.2407434,0.349226756 C5.60016555,-0.0700990862 6.23146553,-0.118660623 6.65079137,0.240761528 C6.68967018,0.27408622 6.72593191,0.310347949 6.7592566,0.349226756 Z"
          fill="#212121"
          transform="translate(6.000000, 3.231714) rotate(180.000000) translate(-6.000000, -3.231714) "
        />
        <path
          d="M0,-1.22124533e-13 L1,6.15771224e-14 L6,5.8 L11,-3.02737051e-14 L12,-1.22124533e-13 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,-1.22124533e-13 Z"
          fill="#757575"
        />
      </g>
    </g>
  </svg>
);

export function getArrowByPlacement(placement: Placement) {
  if (placement.indexOf('top') === 0) {
    return top;
  }

  if (placement.indexOf('bottom') === 0) {
    return bottom;
  }

  if (placement.indexOf('left') === 0) {
    return left;
  }

  if (placement.indexOf('right') === 0) {
    return right;
  }
}

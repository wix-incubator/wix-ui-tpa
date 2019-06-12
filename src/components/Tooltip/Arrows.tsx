import * as React from 'react';
import { Placement } from 'wix-ui-core/popover';

export const bottom: React.ReactNode = (
  <svg
    width="12px"
    height="7px"
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none">
      <g transform="translate(6.000000, 3.500000) scale(1, -1) translate(-6.000000, -3.500000) translate(0.000000, -0.000000)">
        <polygon
          fill="#212121"
          transform="translate(5.765455, 2.500000) rotate(180.000000) translate(-5.765455, -2.500000) "
          points="5.53090909 -2.26485497e-14 10.44 5 1.09090909 5"
        />
        <path
          d="M0,6.17284002e-14 L1.68,6.17284002e-14 L6,5 L10.44,6.17284002e-14 L12,6.17284002e-14 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,6.17284002e-14 Z"
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
    <g stroke="none" strokeWidth="1" fill="none">
      <g transform="translate(3.500000, 6.000000) scale(-1, 1) rotate(90.000000) translate(-3.500000, -6.000000) translate(-2.500000, 2.500000)">
        <polygon
          id="Triangle"
          fill="#212121"
          transform="translate(5.765455, 2.500000) rotate(180.000000) translate(-5.765455, -2.500000) "
          points="5.53090909 -2.26485497e-14 10.44 5 1.09090909 5"
        />
        <path
          d="M0,6.17284002e-14 L1.68,6.17284002e-14 L6,5 L10.44,6.17284002e-14 L12,6.17284002e-14 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,6.17284002e-14 Z"
          id="Rectangle"
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
    <g stroke="none" strokeWidth="1" fill="none">
      <g transform="translate(3.500000, 6.000000) rotate(90.000000) translate(-3.500000, -6.000000) translate(-2.500000, 2.500000)">
        <polygon
          id="Triangle"
          fill="#212121"
          transform="translate(5.765455, 2.500000) rotate(180.000000) translate(-5.765455, -2.500000) "
          points="5.53090909 -2.26485497e-14 10.44 5 1.09090909 5"
        />
        <path
          d="M0,6.17284002e-14 L1.68,6.17284002e-14 L6,5 L10.44,6.17284002e-14 L12,6.17284002e-14 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,6.17284002e-14 Z"
          id="Rectangle"
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
    <g stroke="none" strokeWidth="1" fill="none">
      <g transform="translate(0.000000, -0.000000)">
        <polygon
          fill="#212121"
          transform="translate(5.765455, 2.500000) rotate(180.000000) translate(-5.765455, -2.500000) "
          points="5.53090909 -2.26485497e-14 10.44 5 1.09090909 5"
        />
        <path
          d="M0,6.17284002e-14 L1.68,6.17284002e-14 L6,5 L10.44,6.17284002e-14 L12,6.17284002e-14 L6.7592566,6.11420063 C6.39983445,6.53352647 5.76853447,6.58208801 5.34920863,6.22266586 C5.31032982,6.18934117 5.27406809,6.15307944 5.2407434,6.11420063 L0,6.17284002e-14 Z"
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

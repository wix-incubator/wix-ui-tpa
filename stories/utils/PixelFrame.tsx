import * as React from 'react';

export class PixelFrame extends React.Component<{
  className: string;
}> {
  render() {
    const { className } = this.props;
    return (
      <svg
        height="1456"
        width="685"
        version="1.1"
        viewBox="0 0 685.00001 1456"
        className={className}
      >
        <g transform="translate(0 403.64)">
          <path
            d="m680 12.362v-100"
            stroke="#f80"
            strokeWidth="9"
            fill="none"
          />
          <path
            d="m680 312.36v-200"
            stroke="#888"
            strokeWidth="9"
            fill="none"
          />
          <rect
            fillRule="evenodd"
            rx="80"
            ry="80"
            height="1216"
            width="682"
            y="-403.64"
            x="0"
            fill="#222"
          />
          <g fillRule="evenodd" fill="#fff">
            <rect
              fillOpacity=".86667"
              rx="25"
              ry="25"
              height="900"
              width="625"
              y="-300.64"
              x="28.5"
            />
            <rect
              fillOpacity=".13333"
              rx="5"
              ry="5"
              height="18"
              width="160"
              y="752.36"
              x="261"
            />
            <rect
              fillOpacity=".13333"
              rx="5"
              ry="5"
              height="18"
              width="160"
              y="-365.64"
              x="261"
            />
          </g>
          <g fillRule="evenodd">
            <circle cx="125" cy="-332.64" r="15" />
            <circle cx="450" cy="-333.64" r="10" />
            <circle cx="209.5" cy="-331.14" r="17.5" />
          </g>
        </g>
      </svg>
    );
  }
}

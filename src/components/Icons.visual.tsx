import * as React from 'react';
import { visualize, snap } from 'storybook-snapper';
import * as Icons from '../assets/icons/index';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 30px)',
  gridTemplateRows: '30px',
  gridGap: 10,
  gridAutoFlow: 'dense',
};
const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc',
};

const IconTable = () => {
  return (
    <div style={gridStyle}>
      {Object.keys(Icons).map(icon => (
        <div style={iconStyle}>{React.createElement(Icons[icon])}</div>
      ))}
    </div>
  );
};

visualize('Icons', () => {
  snap('All', () => <IconTable />);
});

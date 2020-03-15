import * as React from 'react';
import {Tags} from '../';
import extendedStyles from './TagsWiringExample.st.css';
import {SKIN} from '../constants';

export const TagsWiringExample = (props) => {
  const items = Array(20)
    .fill('')
    .map((item, index) => ({ title: `Title ${index + 1}`, checked: index % 3 === 0, value: `value ${index + 1}` }));
  return <div>
    Solid:
    <Tags key='solid' skin={SKIN.solid} items={items} onClick={console.log} {...extendedStyles('solid', {}, props)} />
    Light:
    <Tags key='light' skin={SKIN.light} items={items} onClick={console.log} {...extendedStyles('light', {}, props)} />
  </div>;
};

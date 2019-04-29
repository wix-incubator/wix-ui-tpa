import * as React from 'react';
import * as PropTypes from 'prop-types';
import LiveCodeExample from 'wix-storybook-utils/LiveCodeExample';

import { LiveScope } from '../allComponents';
import * as styles from './styles.scss';

/**
 * A utility function to convert a props object to an array of props strings.
 * Example usage:
 *
 *  const myComponentString = props => `
 *    <div
 *      ${createPropsArray(props).join('\n    ')}
 *    />
 *  `;
 *
 *  myComponentString({ id: 'some-id', style: { padding: 5 }})
 *  // Will return:
 *  //  `<div
 *  //    id="some-id"
 *  //    style={{ padding: 5 }}
 *  //  />`
 */
export const createPropsArray = props =>
  Object.entries(props).map(([key, value]) => {
    if (value === true) {
      return key;
    }
    if (typeof value === 'string') {
      return `${key}="${value}"`;
    }

    return `${key}={${JSON.stringify(value)}}`;
  });

export const baseScope = LiveScope;

const Component = props => {
  const { scope, title, ...rest } = props;

  // Remove `eslint-disable` comments
  const filteredCode = props.initialCode.replace(
    /^(\s)*\/\*(\s)*eslint-disable(\s)*\*\/(\s)*$/gm,
    '',
  );

  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}

      <LiveCodeExample
        scope={{ ...baseScope, ...scope }}
        {...rest}
        initialCode={filteredCode}
      />
    </div>
  );
};

Component.propTypes = {
  ...LiveCodeExample.propTypes,
  title: PropTypes.string,
};

export default Component;

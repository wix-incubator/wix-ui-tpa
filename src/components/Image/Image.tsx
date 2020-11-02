import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { st, classes } from './Image.st.css';

export interface ImageProps extends TPAComponentProps {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
}

interface DefaultProps {}

interface State {}

/** A component to render image */
export class Image extends React.Component<ImageProps, State> {
  static displayName = 'Image';
  static defaultProps: DefaultProps = {};

  render() {
    const { className, src, width, height, alt } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        {alt ? (
          <img src={src} alt={alt} width={width} height={height} />
        ) : (
          <div style={{ backgroundImage: `url("${src}")`, width, height }} />
        )}
      </div>
    );
  }
}

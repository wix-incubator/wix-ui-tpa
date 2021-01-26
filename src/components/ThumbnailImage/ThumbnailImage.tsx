import * as React from 'react';
import { Image } from '../Image';
import { classes, st } from './ThumbnailImage.st.css';
import { ThumbnailImageProps } from './types';

/** ThumbnailImage is a component representing a relativity small image that typically act as target leading to a primary content (page/flow) */
export class ThumbnailImage extends React.Component<ThumbnailImageProps> {
  static displayName = 'ThumbnailImage';

  render() {
    const { className, ...imageProps } = this.props;

    return <Image className={st(classes.root, className)} {...imageProps} />;
  }
}

import * as React from 'react';
import { Image } from '../Image';
import { classes, st } from './ThumbnailImage.st.css';
import { ThumbnailImageProps } from './types';

/** ThumbnailImage is a component representing a header with high presence providing context about the page content */
export class ThumbnailImage extends React.Component<ThumbnailImageProps> {
  static displayName = 'ThumbnailImage';

  render() {
    const { className, ...imageProps } = this.props;

    return <Image className={st(classes.root, className)} {...imageProps} />;
  }
}

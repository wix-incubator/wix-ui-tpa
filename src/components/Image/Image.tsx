import * as React from 'react';
import {
  MediaImage,
  MediaPlatformItem as MediaImageProps,
} from 'wix-ui-core/media-image';
import { TPAComponentProps } from '../../types';
import { classes, st } from './Image.st.css';

export interface ImageProps extends TPAComponentProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  mediaImageProps?: MediaImageProps;
}

/** A component to render image */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';

  render() {
    const { className, src, mediaImageProps, ...imageProps } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        {mediaImageProps ? (
          <MediaImage {...imageProps} mediaPlatformItem={mediaImageProps} />
        ) : (
          <img {...imageProps} src={src} />
        )}
      </div>
    );
  }
}

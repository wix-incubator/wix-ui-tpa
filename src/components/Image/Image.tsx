import * as React from 'react';
import {
  MediaImage,
  MediaPlatformItem as MediaItemProps,
} from 'wix-ui-core/media-image';
import { TPAComponentProps } from '../../types';
import { classes, st } from './Image.st.css';

export interface ImageProps extends TPAComponentProps {
  /** The full URL of the source */
  src?: string;
  /** The intrinsic width of the image in pixels */
  width?: number;
  /** The intrinsic height of the image in pixels */
  height?: number;
  /** The alternative text description of the image. Allowing better SEO when the image has meaning of content */
  alt?: string;
  /** A callback to be called when the image is loaded */
  onLoad?: React.EventHandler<React.SyntheticEvent>;
  /** Exposing the MediaPlatformItem API as specified in https://wix-wix-ui-core.surge.sh/?activeTab=Usage&path=%2Fstory%2Fcomponents--media-image */
  mediaItem?: MediaItemProps;
}

/** Image is a component to literally display an image - whether a regular with full path or an item from the media manager */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';

  render() {
    const { className, src, mediaItem, ...imageProps } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        {mediaItem ? (
          <MediaImage {...imageProps} mediaPlatformItem={mediaItem} />
        ) : (
          <img {...imageProps} src={src} />
        )}
      </div>
    );
  }
}

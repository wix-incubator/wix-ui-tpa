import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import {
  MediaImage,
  MediaPlatformItem as MediaItemProps,
} from 'wix-ui-core/media-image';
import { TPAComponentProps } from '../../types';
import { classes, st } from './Image.st.css';

export interface ImageProps extends TPAComponentProps {
  /** The source could be any absolute full URL or a relative URI of a media platform item */
  src?: string;
  /** The intrinsic width of the image in pixels */
  width?: number;
  /** The intrinsic height of the image in pixels */
  height?: number;
  /** The alternative text description of the image. Allowing better SEO when the image has meaning of content */
  alt?: string;
  /** A callback to be called when the image is loaded */
  onLoad?: React.EventHandler<React.SyntheticEvent>;
  /** A callback to be called if error occurs while loading */
  onError?: React.EventHandler<React.SyntheticEvent>;
}

/** Image is a component to literally display an image - whether a regular with full path or an item from the media manager */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';

  render() {
    const { className, src, width, height, ...imageProps } = this.props;
    const dimensions = { width, height };

    const isAbsoluteUrl = src.match('^https?://');

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        {isAbsoluteUrl ? (
          <CoreImage
            {...imageProps}
            nativeProps={{ ...dimensions }}
            src={src}
          />
        ) : (
          <MediaImage
            {...imageProps}
            {...dimensions}
            mediaPlatformItem={{ uri: src, ...dimensions }}
          />
        )}
      </div>
    );
  }
}

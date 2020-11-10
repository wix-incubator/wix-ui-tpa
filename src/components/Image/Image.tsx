import * as React from 'react';
import {
  MediaImage,
  MediaPlatformItem as MediaItemProps,
} from 'wix-ui-core/media-image';
import { TPAComponentProps } from '../../types';
import { classes, st } from './Image.st.css';

export interface ImageProps extends TPAComponentProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  onLoad?: React.EventHandler<React.SyntheticEvent>;
  mediaItem?: MediaItemProps;
}

/** A component to render image */
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

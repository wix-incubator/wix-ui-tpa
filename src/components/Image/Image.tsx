import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import { MediaImage, MediaImageScaling } from 'wix-ui-core/media-image';
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
  /** An experience to set while the image is fetched and loaded  */
  loadingBehavior?: 'none' | 'blur';
}

/** Image is a component to literally display an image - whether an absolute with full URL or a media platform item with relative URI */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';

  state = { isLoaded: false };

  _onLoad(event) {
    const { onLoad } = this.props;

    onLoad && onLoad(event);

    if (!this.state.isLoaded) {
      setTimeout(() => {
        this.setState({ isLoaded: true });
      }, 2000);
    }
  }

  render() {
    const {
      className,
      src,
      width,
      height,
      onLoad,
      loadingBehavior,
      ...imageProps
    } = this.props;
    const { isLoaded } = this.state;
    const dimensions = { width, height };

    const isAbsoluteUrl = src.match('^https?://');

    const MediaImageWithLoading = () => (
      <>
        {!isLoaded && (
          <MediaImage
            {...imageProps}
            mediaPlatformItem={{
              uri: src,
              ...dimensions,
              options: {
                filters: {
                  blur: 3,
                },
              },
            }}
          />
        )}
        <MediaImage
          {...imageProps}
          mediaPlatformItem={{
            uri: src,
            ...dimensions,
          }}
          onLoad={this._onLoad}
        />
      </>
    );

    return (
      <div
        className={st(
          classes.root,
          { preload: !isLoaded, loaded: isLoaded },
          className,
        )}
        data-hook={this.props['data-hook']}
      >
        {isAbsoluteUrl ? (
          <CoreImage
            {...imageProps}
            nativeProps={{ ...dimensions }}
            src={src}
          />
        ) : (
          <MediaImageWithLoading />
        )}
      </div>
    );
  }
}

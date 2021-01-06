import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import { MediaImage } from 'wix-ui-core/media-image';
import { TPAComponentProps } from '../../types';
import { classes, st } from './Image.st.css';

const enum ResizeOptions {
  contain = 'contain',
  cover = 'cover',
}

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
  /** Specifies how the image is resized to fit its container */
  resize?: 'contain' | 'cover';
  /** An experience to set while the image is fetched and loaded  */
  loadingBehavior?: 'none' | 'blur';
}

type DefaultProps = Pick<ImageProps, 'resize'>;

interface Dimensions {
  width: ImageProps['width'];
  height: ImageProps['height'];
}

const Placeholder = ({
  imageProps,
  src,
  dimensions,
}: {
  imageProps: Partial<ImageProps>;
  src: ImageProps['src'];
  dimensions: Dimensions;
}) => (
  <MediaImage
    {...imageProps}
    {...dimensions}
    mediaPlatformItem={{
      uri: src,
      ...dimensions,
      options: {
        filters: {
          blur: 3,
        },
      },
    }}
    className={classes.placeholder}
  />
);

/** Image is a component to literally display an image - whether an absolute with full URL or a media platform item with relative URI */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';
  static defaultProps: DefaultProps = { resize: ResizeOptions.contain };

  state = { isLoaded: false };

  _onLoad = (event) => {
    const { onLoad } = this.props;

    if (!this.state.isLoaded) {
      this.setState({ isLoaded: true });
    }

    onLoad && onLoad(event);
  };

  render() {
    const {
      className,
      src,
      width,
      height,
      onLoad,
      resize,
      loadingBehavior,
      ...imageProps
    } = this.props;
    const { isLoaded } = this.state;
    const dimensions = { width, height };

    const isAbsoluteUrl = src && src.match('^https?://');
    const hasLoadingBehavior = loadingBehavior === 'blur';

    return (
      <div
        className={st(
          classes.root,
          {
            resize,
            ...(hasLoadingBehavior && { preload: !isLoaded, loaded: isLoaded }),
          },
          resize === ResizeOptions.cover ? classes.cover : classes.contain,
          className,
        )}
        data-hook={this.props['data-hook']}
      >
        {isAbsoluteUrl ? (
          <CoreImage
            {...imageProps}
            nativeProps={{ ...dimensions }}
            src={src}
            className={classes.absoluteImage}
            onLoad={this._onLoad}
          />
        ) : (
          <>
            {hasLoadingBehavior && !isLoaded && (
              <Placeholder
                imageProps={imageProps}
                src={src}
                dimensions={dimensions}
              />
            )}
            <MediaImage
              {...imageProps}
              {...dimensions}
              mediaPlatformItem={{
                uri: src,
                ...dimensions,
              }}
              className={classes.relativeImage}
              onLoad={this._onLoad}
            />
          </>
        )}
      </div>
    );
  }
}

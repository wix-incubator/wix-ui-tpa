import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import { MediaImage } from 'wix-ui-core/media-image';
import { TPAComponentProps } from '../../types';
import { classes, st } from './Image.st.css';

const enum AspectRatioOptions {
  square = 1,
  cinema = 16 / 9,
  landscape = 4 / 3,
}

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
  // Specifies the proportional relationship between width and height
  aspectRatio?: '1:1' | '16:9' | '4:3' | number;
  /** An experience to set while the image is fetched and loaded  */
  loadingBehavior?: 'none' | 'blur';
}

type DefaultProps = Pick<ImageProps, 'aspectRatio' | 'resize'>;

interface Dimensions {
  width: ImageProps['width'];
  height: ImageProps['height'];
}

const Placeholder = ({
  imageProps,
  src,
  sourceDimensions,
  containerDimensions,
}: {
  imageProps: Partial<ImageProps>;
  src: ImageProps['src'];
  sourceDimensions: Dimensions;
  containerDimensions: Dimensions;
}) => (
  <MediaImage
    {...imageProps}
    {...containerDimensions}
    mediaPlatformItem={{
      uri: src,
      ...sourceDimensions,
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
  static defaultProps: DefaultProps = {
    resize: ResizeOptions.contain,
    aspectRatio: 1,
  };

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
      aspectRatio,
      resize,
      loadingBehavior,
      ...imageProps
    } = this.props;
    const { isLoaded } = this.state;

    const isAbsoluteUrl = src && src.match('^https?://');

    const aspectRatioAsNumber =
      typeof aspectRatio === 'number' ? aspectRatio : 1;
    const sourceDimensions = { width, height };
    const containerDimensions = {
      width:
        !width && aspectRatioAsNumber ? height * aspectRatioAsNumber : width,
      height:
        !height && aspectRatioAsNumber ? width / aspectRatioAsNumber : height,
    };

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
            nativeProps={{ ...containerDimensions }}
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
                sourceDimensions={sourceDimensions}
                containerDimensions={containerDimensions}
              />
            )}
            <MediaImage
              {...imageProps}
              {...containerDimensions}
              mediaPlatformItem={{
                uri: src,
                ...sourceDimensions,
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

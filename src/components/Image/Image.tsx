import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import { classes, st } from './Image.st.css';
import { RelativeImage } from './RelativeImage';
import { AspectRatioOptions, ImageProps, ResizeOptions } from './types';

type DefaultProps = Pick<ImageProps, 'resize' | 'aspectRatio'>;

/** Image is a component to literally display an image - whether an absolute with full URL or a media platform item with relative URI */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';
  static defaultProps: DefaultProps = {
    resize: ResizeOptions.contain,
    aspectRatio: 1,
  };

  state = { isLoaded: false, width: null, height: null };

  containerRef = React.createRef<HTMLDivElement>();

  _onLoad = (event) => {
    const { onLoad } = this.props;

    if (!this.state.isLoaded) {
      this.setState({ isLoaded: true });
    }

    onLoad && onLoad(event);
  };

  _calculateDimensions = (
    width: number,
    height: number,
    aspectRatio: number,
  ) => {
    const sourceDimensions = { width, height };
    const containerDimensions = {
      width: !width && height && aspectRatio ? height * aspectRatio : width,
      height: !height && width && aspectRatio ? width / aspectRatio : height,
    };

    return {
      sourceDimensions,
      containerDimensions,
    };
  };

  componentDidMount() {
    const {
      width,
      height,
    } = this.containerRef.current?.getBoundingClientRect();

    this.setState({ width, height });
  }

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
      typeof aspectRatio === 'number'
        ? aspectRatio
        : AspectRatioOptions[aspectRatio];

    const { sourceDimensions, containerDimensions } = this._calculateDimensions(
      width || this.state.width,
      height || this.state.height,
      aspectRatioAsNumber,
    );

    const hasLoadingBehavior = loadingBehavior === 'blur';

    console.log({ sourceDimensions, containerDimensions });
    return (
      <div
        ref={this.containerRef}
        className={st(
          classes.root,
          resize === ResizeOptions.cover ? classes.cover : classes.contain,
          className,
        )}
        data-hook={this.props['data-hook']}
      >
        {isAbsoluteUrl ? (
          <CoreImage
            src={src}
            className={st(
              classes.absoluteImage,
              hasLoadingBehavior &&
                (isLoaded ? classes.loaded : classes.preload),
            )}
            nativeProps={{ ...containerDimensions }}
            onLoad={this._onLoad}
            {...imageProps}
          />
        ) : (
          containerDimensions.width &&
          containerDimensions.height && (
            <RelativeImage
              src={src}
              className={classes.relativeImage}
              sourceDimensions={sourceDimensions}
              containerDimensions={containerDimensions}
              isPlaceholderDisplayed={hasLoadingBehavior && !isLoaded}
              onLoad={this._onLoad}
              {...imageProps}
            />
          )
        )}
      </div>
    );
  }
}

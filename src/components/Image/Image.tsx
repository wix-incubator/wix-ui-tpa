import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import { classes, st } from './Image.st.css';
import { calculateDimensions } from './ImageUtils';
import { RelativeImage } from './RelativeImage';
import { AspectRatioOptions, ImageProps, ResizeOptions } from './types';

type DefaultProps = Pick<ImageProps, 'resize'>;

/** Image is a component to literally display an image - whether an absolute with full URL or a media platform item with relative URI */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';
  static defaultProps: DefaultProps = {
    resize: ResizeOptions.contain,
  };

  state = { isLoaded: false, boundingRectDimensions: null };

  containerRef = React.createRef<HTMLDivElement>();

  _onLoad = (event) => {
    const { onLoad } = this.props;

    if (!this.state.isLoaded) {
      this.setState({ isLoaded: true });
    }

    onLoad && onLoad(event);
  };

  componentDidMount() {
    const { width, height, aspectRatio } = this.props;

    // Updating the state only if we don't have enough information to calculate the dimensions
    if (!(width && height) || !((width || height) && aspectRatio)) {
      const {
        width: boundingRectWidth,
        height: boundingRectHeight,
      } = this.containerRef.current?.getBoundingClientRect();

      this.setState({
        boundingRectDimensions: {
          width: boundingRectWidth,
          height: boundingRectHeight,
        },
      });
    }
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
    const { isLoaded, boundingRectDimensions } = this.state;

    const isAbsoluteUrl = src && src.match('^https?://');

    const aspectRatioAsNumber =
      typeof aspectRatio === 'number'
        ? aspectRatio
        : AspectRatioOptions[aspectRatio];

    // Taking the dimensions from props or from its bounding rectangle in case they're missing
    const sourceDimensions = {
      width: width || boundingRectDimensions?.width,
      height: height || boundingRectDimensions?.height,
    };

    // Calculating the dimensions considering the given values and aspect ratio
    const calculatedDimensions = calculateDimensions({
      ...sourceDimensions,
      aspectRatio: aspectRatioAsNumber,
    });

    const hasLoadingBehavior = loadingBehavior === 'blur';

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
            {...(calculatedDimensions && {
              nativeProps: { ...calculatedDimensions },
            })}
            onLoad={this._onLoad}
            {...imageProps}
          />
        ) : (
          <RelativeImage
            src={src}
            className={classes.relativeImage}
            sourceDimensions={sourceDimensions}
            containerDimensions={calculatedDimensions}
            isPlaceholderDisplayed={hasLoadingBehavior && !isLoaded}
            onLoad={this._onLoad}
            {...imageProps}
          />
        )}
      </div>
    );
  }
}

import * as React from 'react';
import { MediaImage } from 'wix-ui-core/media-image';
import { Dimensions, ImageProps } from '../types';
import { classes, st } from './RelativeImage.st.css';

interface RelativeImageProps extends Omit<ImageProps, 'width' | 'height'> {
  sourceDimensions: Dimensions;
  containerDimensions: Dimensions;
  isPlaceholderDisplayed?: boolean;
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

export class RelativeImage extends React.Component<RelativeImageProps> {
  render() {
    const {
      className,
      src,
      isPlaceholderDisplayed,
      sourceDimensions,
      containerDimensions,
      ...imageProps
    } = this.props;

    return (
      <>
        {isPlaceholderDisplayed && (
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
          className={classes.root}
        />
      </>
    );
  }
}

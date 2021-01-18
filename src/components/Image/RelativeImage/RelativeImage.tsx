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
  src,
  sourceDimensions,
  containerDimensions,
  className,
  ...imageProps
}: RelativeImageProps) => (
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
    className={className}
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
      onLoad,
      ...imageProps
    } = this.props;

    return (
      <>
        {isPlaceholderDisplayed && (
          <Placeholder
            {...imageProps}
            src={src}
            sourceDimensions={sourceDimensions}
            containerDimensions={containerDimensions}
            className={st(classes.placeholder, className)}
          />
        )}
        <MediaImage
          {...imageProps}
          {...containerDimensions}
          mediaPlatformItem={{
            uri: src,
            ...sourceDimensions,
          }}
          className={st(classes.root, className)}
          onLoad={onLoad}
        />
      </>
    );
  }
}

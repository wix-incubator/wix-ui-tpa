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
  className,
  sourceDimensions,
  containerDimensions,
  ...imageProps
}: RelativeImageProps) => (
  <MediaImage
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
    {...containerDimensions}
    {...imageProps}
  />
);

export class RelativeImage extends React.Component<RelativeImageProps> {
  render() {
    const {
      src,
      className,
      sourceDimensions,
      containerDimensions,
      isPlaceholderDisplayed,
      onLoad,
      ...imageProps
    } = this.props;

    return (
      containerDimensions && (
        <>
          {isPlaceholderDisplayed && (
            <Placeholder
              src={src}
              className={st(classes.placeholder, className)}
              sourceDimensions={sourceDimensions}
              containerDimensions={containerDimensions}
              {...imageProps}
            />
          )}
          <MediaImage
            mediaPlatformItem={{
              uri: src,
              ...sourceDimensions,
            }}
            className={st(classes.root, className)}
            onLoad={onLoad}
            {...containerDimensions}
            {...imageProps}
          />
        </>
      )
    );
  }
}

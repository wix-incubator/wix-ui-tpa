import * as React from 'react';
import { Image, ResizeOptions } from '../Image';
import { classes, st } from './HeroImage.st.css';
import { HeroImageProps } from './types';

type DefaultProps = Pick<HeroImageProps, 'resize'>;

/** HeroImage is a component representing a header with high presence providing context about the page content */
export class HeroImage extends React.Component<HeroImageProps> {
  static displayName = 'HeroImage';
  static defaultProps: DefaultProps = {
    resize: ResizeOptions.cover,
  };

  render() {
    const { className, ...imageProps } = this.props;

    return <Image className={st(classes.root, className)} {...imageProps} />;
  }
}

import * as React from 'react';
import { Image } from '../Image';
import { classes, st } from './HeroImage.st.css';
import { HeroImageProps } from './types';

/** HeroImage is a component  */
export class HeroImage extends React.Component<HeroImageProps> {
  static displayName = 'HeroImage';

  render() {
    const { className, ...imageProps } = this.props;

    return <Image className={st(classes.root, className)} {...imageProps} />;
  }
}

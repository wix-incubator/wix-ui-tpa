import * as React from 'react';
import styles from './ProGallery.st.css';
import { ProGallery as Gallery } from 'pro-gallery';
// import 'pro-gallery/dist/statics/main.css';

import { ProGalleryItem, ProGalleryLayout, ProGalleryOptions } from './types';
import {
  defaultCollageOptions,
  defaultColumnOptions,
  defaultGridOptions,
  defaultMasonryOptions,
  defaultPanoramaOptions,
  defaultSliderOptions,
  defaultSlideShowOptions,
  defaultThumbnailsOptions,
} from './defaultOptionByLayout';

export interface ProGalleryProps {
  width: number;
  height: number;
  items: ProGalleryItem[];
  options: ProGalleryOptions;
  scrollingElement: HTMLElement;
  eventsListener: Function;
}

interface State {}

/** ProGallery */
export class ProGallery extends React.Component<ProGalleryProps, State> {
  static displayName = 'ProGallery';

  render() {
    const container = {
      width: this.props.width,
      height: this.props.height,
    };

    const { items, scrollingElement, eventsListener, ...rest } = this.props;
    let { options } = this.props;
    switch (options.galleryLayout) {
      case ProGalleryLayout.Collage:
        options = { ...defaultCollageOptions, ...options };
        break;
      case ProGalleryLayout.Column:
        options = { ...defaultColumnOptions, ...options };
        break;
      case ProGalleryLayout.Grid:
        options = { ...defaultGridOptions, ...options };
        break;
      case ProGalleryLayout.Masonry:
        options = { ...defaultMasonryOptions, ...options };
        break;
      case ProGalleryLayout.Panorama:
        options = { ...defaultPanoramaOptions, ...options };
        break;
      case ProGalleryLayout.Slider:
        options = { ...defaultSliderOptions, ...options };
        break;
      case ProGalleryLayout.SlideShow:
        options = { ...defaultSlideShowOptions, ...options };
        break;
      case ProGalleryLayout.Thumbnails:
        options = { ...defaultThumbnailsOptions, ...options };
    }

    return (
      <div {...styles('root', {}, rest)}>
        <Gallery
          items={items}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </div>
    );
  }
}

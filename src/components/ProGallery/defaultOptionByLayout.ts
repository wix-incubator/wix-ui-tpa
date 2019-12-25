import { Alignment, galleryOptions, ImageResize } from './types';

const defaultOptions: Partial<galleryOptions> = {
  overlayAnimation: 'NO_EFFECT',
  imageHoverAnimation: 'NO_EFFECT',
  imageLoadingMode: 'BLUR',
  scrollAnimation: 'NO_EFFECT',
  imageQuality: 90,
  cubeRatio: 1,
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
};

export const defaultThumbnailsOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  allowHover: true,
  itemClick: 'expand',
  cubeType: ImageResize.CROP,
  galleryThumbnailsAlignment: Alignment.Bottom,
  thumbnailSize: 120,
  thumbnailSpacings: 4,
  arrowsSize: 23,
  galleryMargin: 0,
};

export const defaultCollageOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  collageDensity: 0.8,
  gallerySize: 30,
  groupSize: 3,
  groupTypes: '1,2h,2v,3t,3b,3l,3r',
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  arrowsSize: 23,
  galleryMargin: 0,
};

export const defaultMasonryOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  gallerySize: 30,
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  galleryMargin: 0,
};

export const defaultGridOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeType: ImageResize.CROP,
  gallerySize: 30,
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  arrowsSize: 23,
  galleryMargin: 0,
};

export const defaultSliderOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeType: ImageResize.CROP,
  allowHover: true,
  itemClick: 'expand',
  arrowsSize: 23,
  galleryMargin: 0,
};

export const defaultSlideShowOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeType: ImageResize.CROP,
  slideshowInfoSize: 200,
  allowHover: true,
  itemClick: 'expand',
  arrowsSize: 23,
  imageLoadingMode: 'BLUR',
  scrollAnimation: 'NO_EFFECT',
  galleryMargin: 0,
};

export const defaultPanoramaOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  galleryMargin: 0,
};

export const defaultColumnOptions: Partial<galleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  allowHover: true,
  itemClick: 'expand',
  arrowsSize: 23,
  galleryMargin: 0,
};

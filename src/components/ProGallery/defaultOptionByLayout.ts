import { Alignment, ImageMode, ProGalleryOptions } from './types';
const defaultOptions: Partial<ProGalleryOptions> = {
  overlayAnimation: 'NO_EFFECT',
  imageHoverAnimation: 'NO_EFFECT',
  imageLoadingMode: 'BLUR',
  scrollAnimation: 'NO_EFFECT',
  imageQuality: 90,
};

export const defaultThumbnailsOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  allowHover: true,
  itemClick: 'expand',
  cubeType: ImageMode.Fill,
  cubeRatio: 1,
  galleryThumbnailsAlignment: Alignment.Bottom,
  thumbnailSize: 120,
  thumbnailSpacings: 4,
  arrowsSize: 23,
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultCollageOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  collageDensity: 0.8,
  cubeRatio: 1,
  gallerySize: 30,
  groupSize: 3,
  groupTypes: '1,2h,2v,3t,3b,3l,3r',
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  arrowsSize: 23,
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultMasonryOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeRatio: 1,
  gallerySize: 30,
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultGridOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeType: ImageMode.Fill,
  cubeRatio: 1,
  gallerySize: 30,
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  arrowsSize: 23,
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultSliderOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeType: ImageMode.Fill,
  cubeRatio: 1,
  allowHover: true,
  itemClick: 'expand',
  arrowsSize: 23,
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultSlideShowOptions: Partial<ProGalleryOptions> = {
  imageMargin: 10,
  cubeType: ImageMode.Fill,
  cubeRatio: 1,
  slideshowInfoSize: 200,
  allowHover: true,
  itemClick: 'expand',
  arrowsSize: 23,
  imageLoadingMode: 'BLUR',
  scrollAnimation: 'NO_EFFECT',
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultPanoramaOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeRatio: 1,
  allowHover: true,
  enableInfiniteScroll: false,
  loadMoreAmount: 'all',
  itemClick: 'expand',
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

export const defaultColumnOptions: Partial<ProGalleryOptions> = {
  ...defaultOptions,
  imageMargin: 10,
  cubeRatio: 1,
  allowHover: true,
  itemClick: 'expand',
  arrowsSize: 23,
  videoPlay: 'hover',
  videoSpeed: '1',
  videoLoop: true,
  galleryMargin: 0,
};

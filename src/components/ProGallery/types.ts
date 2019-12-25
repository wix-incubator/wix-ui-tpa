export interface ProGalleryItem {
  metadata: {
    height: number;
    lastModified: number;
    name: string;
    size: number;
    width: number;
    title: string;
    type?: string;
    poster?: string;
    duration?: number;
    description?: string;
  };
  orderIndex: number;
  itemId: string;
  url: string;
}
export enum ProGalleryLayouts {
  Collage = 0,
  Masonry = 1,
  Grid = 2,
  Thumbnails = 3,
  Slider = 4,
  SlideShow = 5,
  Panorama = 6,
  Column = 7,
}

export enum ImageResize {
  CROP = 'fill',
  FIT = 'fit',
}

export enum Alignment {
  Bottom = 'bottom',
  Top = 'top',
  Left = 'Left',
  Right = 'right',
}

export enum ScrollDirection {
  Vertical = 0,
  Horizontal = 1,
}

export enum GridStyle {
  FitToScreen = 0,
  SetItemsPerRow = 1,
}
export interface ProGalleryOptions {
  galleryLayout: ProGalleryLayouts;
}

export interface galleryOptions {
  galleryLayout: ProGalleryLayouts;
  scrollDirection?: ScrollDirection;
  gridStyle?: GridStyle;
  allowLeanGallery?: boolean;
  numberOfImagesPerRow?: number;
  isVertical?: boolean;
  allowHover?: boolean;
  isRTL?: boolean;
  itemClick?: string;
  imageMargin?: number;
  collageDensity?: number;
  gallerySize?: number;
  groupSize?: number;
  groupTypes?: string;
  enableInfiniteScroll?: boolean;
  cubeImages?: boolean;
  cubeType?: ImageResize;
  loadMoreAmount?: string;
  cubeRatio?: number;
  galleryThumbnailsAlignment?: Alignment;
  thumbnailSize?: number;
  thumbnailSpacings?: number;
  arrowsSize?: number;
  overlayAnimation?: string;
  imageHoverAnimation?: string;
  imageLoadingMode?: string;
  scrollAnimation?: string;
  imageQuality?: number;
  videoPlay?: string;
  videoSpeed?: string;
  videoLoop?: boolean;
  galleryMargin?: number;
  slideshowInfoSize?: number;
  slideshowLoop?: boolean;
  isAutoSlideshow?: boolean;
  playButtonForAutoSlideShow?: boolean;
}

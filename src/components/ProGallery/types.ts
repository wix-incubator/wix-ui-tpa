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
export enum ProGalleryLayout {
  Collage = 0,
  Masonry = 1,
  Grid = 2,
  Thumbnails = 3,
  Slider = 4,
  SlideShow = 5,
  Panorama = 6,
  Column = 7,
}

export enum ImageMode {
  Fill = 'fill',
  Crop = 'crop',
}

export enum Alignment {
  Bottom = 'bottom',
  Top = 'top',
  Left = 'Left',
  Right = 'right',
}

export interface ProGalleryOptions {
  galleryLayout: ProGalleryLayout;
  allowHover?: boolean;
  itemClick?: string;
  imageMargin?: number;
  collageDensity?: number;
  gallerySize?: number;
  groupSize?: number;
  groupTypes?: string;
  enableInfiniteScroll?: boolean;
  cubeType?: ImageMode;
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
}

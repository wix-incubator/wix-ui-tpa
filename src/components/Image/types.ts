import { TPAComponentProps } from '../../types';

export interface ImageProps extends TPAComponentProps {
  /** The source could be any absolute full URL or a relative URI of a media platform item */
  src?: string;
  /** The intrinsic width of the image in pixels */
  width?: number;
  /** The intrinsic height of the image in pixels */
  height?: number;
  /** The alternative text description of the image. Allowing better SEO when the image has meaning of content */
  alt?: string;
  /** A callback to be called when the image is loaded */
  onLoad?: React.EventHandler<React.SyntheticEvent>;
  /** A callback to be called if error occurs while loading */
  onError?: React.EventHandler<React.SyntheticEvent>;
  /** Specifies how the image is resized to fit its container */
  resize?: ResizeOptions;
  /** Specifies wether the image adapts and scales relatively to the containing layout */
  fluid?: boolean;
  // Specifies the proportional relationship between width and height
  aspectRatio?: keyof typeof AspectRatioPresets | number;
  /** An effect to appear when the image is hovered  */
  hoverEffect?: HoverEffectOptions;
  /** An experience to set while the image is fetched and loaded  */
  loadingBehavior?: LoadingBehaviorOptions;
}

export interface Dimensions {
  width: ImageProps['width'];
  height: ImageProps['height'];
}

export enum ResizeOptions {
  contain = 'contain',
  cover = 'cover',
}

export const AspectRatioPresets = {
  square: 1,
  cinema: 16 / 9,
  landscape: 4 / 3,
};

export enum HoverEffectOptions {
  none = 'none',
  darken = 'darken',
}

export enum LoadingBehaviorOptions {
  none = 'none',
  blur = 'blur',
}

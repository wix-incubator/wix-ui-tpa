import * as React from 'react';
import { LikeButton, LikeButtonProps } from '../LikeButton';
import extendedStyles from './LikeButtonExtendedExample.st.css';

export const LikeButtonExtendedExample: React.FunctionComponent<
  LikeButtonProps
> = props => <LikeButton {...props} {...extendedStyles('root', {}, props)} />;

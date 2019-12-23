import * as React from 'react';
import { ProGallery } from '../';
import styles from './ProGalleryWiringExample.st.css';
import { proGalleryItems, proGalleryOptions } from './examples';

export const ProGalleryWiringExample = () => {
  return (
    <ProGallery
      height={1000}
      width={1000}
      items={proGalleryItems}
      options={proGalleryOptions}
    />
  );
};

import * as React from 'react';
import { ProGallery } from '../';
import styles from './ProGalleryWiringExample.st.css';
import { domId, proGalleryItems, proGalleryOptions } from './examples';
import * as _ from 'lodash';

export const ProGalleryWiringExample = () => {
  return (
    <ProGallery
      options={proGalleryOptions[0]}
      items={proGalleryItems}
      domId={domId}
      height={1000}
      width={1000}
      eventsListener={_.noop}
      scrollingElement={e => e.target.parentElement}
    />
  );
};

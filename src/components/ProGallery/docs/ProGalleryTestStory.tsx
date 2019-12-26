import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ProGallery } from '..';
import { proGalleryItems } from './examples';
import { ProGalleryLayouts } from '../types';
import * as _ from 'lodash';
const kind = 'Tests';

const myProps = {
  scrollingElement: e => e.target.parentNode,
  eventsListener: _.noop,
  items: proGalleryItems,
  height: 1000,
  width: 1000,
  domId: 1,
};

function renderTest(props?: any) {
  const defaultProps = myProps;
  return (
    <div style={{ margin: '10px' }}>
      <ProGallery
        data-hook={'storybook-e2e-ProGallery'}
        {...defaultProps}
        {...props}
        options={{ galleryLayout: ProGalleryLayouts.Thumbnails }}
      />
    </div>
  );
}

storiesOf(kind, module).add('ProGallery', renderTest);

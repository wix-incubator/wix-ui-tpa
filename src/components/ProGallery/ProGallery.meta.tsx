import { ProGallery } from '.';
import Registry from '@ui-autotools/registry';
import { proGalleryItems, proGalleryOptions } from './docs/examples';
import * as _ from 'lodash';

const ProGalleryMetadata = Registry.getComponentMetadata(ProGallery);
ProGalleryMetadata.nonReactStrictModeCompliant = true;

ProGalleryMetadata.addSim({
  title: 'render',
  props: {
    width: 1000,
    height: 1000,
    items: proGalleryItems,
    options: proGalleryOptions[0],
    scrollingElement: e => e.target.parentElement,
    eventsListener : _.noop
  },
});

import { Rating } from '.';
import Registry from '@ui-autotools/registry';

const RatingMetadata = Registry.getComponentMetadata(Rating);
RatingMetadata.nonReactStrictModeCompliant = true;

RatingMetadata.addSim({
  title: 'render',
  props: {
      buttonText: 'Click me!'
  },
});

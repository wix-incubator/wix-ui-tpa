import { Rating, Mode } from '.';
import Registry from '@ui-autotools/registry';

const RatingMetadata = Registry.getComponentMetadata(Rating);
RatingMetadata.nonReactStrictModeCompliant = true;

RatingMetadata.addSim({
  title: 'render',
  props: {
    value: 0,
    mode: Mode.EDIT,
  },
});

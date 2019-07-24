import { Ratings, Mode } from '.';
import Registry from '@ui-autotools/registry';

const RatingsMetadata = Registry.getComponentMetadata(Ratings);
RatingsMetadata.nonReactStrictModeCompliant = true;

RatingsMetadata.addSim({
  title: 'render',
  props: {
    value: 0,
    mode: Mode.Input,
  },
});

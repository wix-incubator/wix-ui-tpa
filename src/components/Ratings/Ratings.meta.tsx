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

RatingsMetadata.addSim({
  title: 'render with value',
  props: {
    value: 3,
    mode: Mode.Input,
  },
});

RatingsMetadata.addSim({
  title: 'render with value and label',
  props: {
    value: 3,
    mode: Mode.Input,
    inputOptions: ['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla'],
  },
});

RatingsMetadata.addSim({
  title: 'render with value mode display',
  props: {
    value: 3,
    mode: Mode.Display,
  },
});

RatingsMetadata.addSim({
  title: 'render with value mode display and labels',
  props: {
    value: 3,
    mode: Mode.Display,
    countDisplay: '150 ratings',
    ratingDisplay: '3.0',
  },
});

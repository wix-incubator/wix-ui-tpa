import { Theme, DotNavigation } from '.';
import Registry from '@ui-autotools/registry';

const DotNavigationMetadata = Registry.getComponentMetadata(DotNavigation);

DotNavigationMetadata.nonReactStrictModeCompliant = true;

DotNavigationMetadata.addSim({
  title: 'render short version',
  props: {
    currentIndex: 0,
    length: 5,
    onSelect: (index: number) => console.log(index),
    showBorder: false,
    theme: Theme.Dark,
    'aria-label': 'Dot Navigation',
  },
});

DotNavigationMetadata.addSim({
  title: 'render long version, currentIndex is 0',
  props: {
    currentIndex: 0,
    length: 10,
    onSelect: (index: number) => console.log(index),
    showBorder: true,
    theme: Theme.Light,
    'aria-label': 'Dot Navigation',
  },
});

DotNavigationMetadata.addSim({
  title: 'render long version at start, currentIndex is 1',
  props: {
    currentIndex: 1,
    length: 10,
    onSelect: (index: number) => console.log(index),
    showBorder: true,
    theme: Theme.Light,
    'aria-label': 'Dot Navigation',
  },
});

DotNavigationMetadata.addSim({
  title: 'render long version, currentIndex is 4',
  props: {
    currentIndex: 4,
    length: 10,
    onSelect: (index: number) => console.log(index),
    showBorder: true,
    theme: Theme.Light,
    'aria-label': 'Dot Navigation',
  },
});

DotNavigationMetadata.addSim({
  title: 'render long version, currentIndex is 8',
  props: {
    currentIndex: 8,
    length: 10,
    onSelect: (index: number) => console.log(index),
    showBorder: true,
    theme: Theme.Light,
    'aria-label': 'Dot Navigation',
  },
});

DotNavigationMetadata.addSim({
  title: 'render long version, currentIndex is 9',
  props: {
    currentIndex: 9,
    length: 10,
    onSelect: (index: number) => console.log(index),
    showBorder: true,
    theme: Theme.Light,
    'aria-label': 'Dot Navigation',
  },
});

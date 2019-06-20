import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

import { inputDriverFactory } from '../components/Input/Input.driver';
export const inputTestkitFactory = testkitFactoryCreator(inputDriverFactory);

import { textDriverFactory } from '../components/Text/Text.driver';
export const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

import { tabsDriverFactory } from '../components/Tabs/Tabs.driver';
export const tabsTestkitFactory = uniTestkitFactoryCreator(tabsDriverFactory);

import { buttonDriverFactory } from '../components/Button/Button.driver';
export const buttonTestkitFactory = uniTestkitFactoryCreator(
  buttonDriverFactory,
);

import { autocompleteDriverFactory } from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = testkitFactoryCreator(
  autocompleteDriverFactory,
);

import { cardDriverFactory } from '../components/Card/Card.driver';
export const cardTestkitFactory = uniTestkitFactoryCreator(cardDriverFactory);

import { overlappingCardDriverFactory } from '../components/OverlappingCard/OverlappingCard.driver';
export const overlappingCardTestkitFactory = uniTestkitFactoryCreator(
  overlappingCardDriverFactory,
);

import { stripCardDriverFactory } from '../components/StripCard/StripCard.driver';
export const stripCardTestkitFactory = uniTestkitFactoryCreator(
  stripCardDriverFactory,
);

import { gridDriverFactory } from '../components/Grid/Grid.driver';
export const gridTestkitFactory = uniTestkitFactoryCreator(gridDriverFactory);

import { iconToggleDriverFactory } from '../components/IconToggle/IconToggle.driver';
export const iconToggleTestkitFactory = testkitFactoryCreator(
  iconToggleDriverFactory,
);

import { likeButtonDriverFactory } from '../components/LikeButton/LikeButton.driver';
export const likeButtonTestkitFactory = testkitFactoryCreator(
  likeButtonDriverFactory,
);

import { paginationDriverFactory } from '../components/Pagination/Pagination.driver';
export const paginationTestkitFactory = testkitFactoryCreator(
  paginationDriverFactory,
);

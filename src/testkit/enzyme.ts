import {
  enzymeTestkitFactoryCreator,
  WrapperData,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

import { inputDriverFactory } from '../components/Input/Input.driver';
export const inputTestkitFactory: (
  obj: WrapperData,
) => any = enzymeTestkitFactoryCreator(inputDriverFactory);

import { textDriverFactory } from '../components/Text/Text.driver';
export const textTestkitFactory: (
  obj: WrapperData,
) => any = enzymeTestkitFactoryCreator(textDriverFactory);

import { buttonDriverFactory } from '../components/Button/Button.driver';
export const buttonTestkitFactory = enzymeUniTestkitFactoryCreator(
  buttonDriverFactory,
);

import { autocompleteDriverFactory } from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory: (
  obj: WrapperData,
) => any = enzymeTestkitFactoryCreator(autocompleteDriverFactory);

import { cardDriverFactory } from '../components/Card/Card.driver';
export const cardTestkitFactory: (
  obj: WrapperData,
) => any = enzymeUniTestkitFactoryCreator(cardDriverFactory);

import { overlappingCardDriverFactory } from '../components/OverlappingCard/OverlappingCard.driver';
export const overlappingCardTestkitFactory: (
  obj: WrapperData,
) => any = enzymeUniTestkitFactoryCreator(overlappingCardDriverFactory);

import { tabsDriverFactory } from '../components/Tabs/Tabs.driver';
export const tabsTestkitFactory: (
  obj: WrapperData,
) => any = enzymeTestkitFactoryCreator(tabsDriverFactory);

import { stripCardDriverFactory } from '../components/StripCard/StripCard.driver';
export const stripCardTestkitFactory: (
  obj: WrapperData,
) => any = enzymeUniTestkitFactoryCreator(stripCardDriverFactory);

import { gridDriverFactory } from '../components/Grid/Grid.driver';
export const gridTestkitFactory: (
  obj: WrapperData,
) => any = enzymeUniTestkitFactoryCreator(gridDriverFactory);

import { tooltipDriverFactory } from '../components/Tooltip/Tooltip.driver';
export const tooltipTestkitFactory: (
  obj: WrapperData,
) => any = enzymeTestkitFactoryCreator(tooltipDriverFactory);

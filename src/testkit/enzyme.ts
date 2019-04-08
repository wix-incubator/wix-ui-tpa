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

import { tabsDriverFactory } from '../components/Tabs/Tabs.driver';
export const tabsTestkitFactory: (
  obj: WrapperData,
) => any = enzymeTestkitFactoryCreator(tabsDriverFactory);

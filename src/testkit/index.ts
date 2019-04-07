import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

import { inputDriverFactory } from '../components/Input/Input.driver';
export const inputTestkitFactory = testkitFactoryCreator(inputDriverFactory);

import { textDriverFactory } from '../components/Text/Text.driver';
export const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

import { tabsDriverFactory } from '../components/Tabs/Tabs.driver';
export const tabsTestkitFactory = testkitFactoryCreator(tabsDriverFactory);

import { buttonDriverFactory } from '../components/Button/Button.driver';
export const buttonTestkitFactory = uniTestkitFactoryCreator(
  buttonDriverFactory,
);

import { autocompleteDriverFactory } from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = testkitFactoryCreator(
  autocompleteDriverFactory,
);

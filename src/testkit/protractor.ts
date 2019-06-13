import {
  protractorTestkitFactoryCreator,
  protractorUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';

import {
  inputDriverFactory,
  InputDriver,
} from '../components/Input/Input.protractor.driver';
export const inputTestkitFactory = protractorTestkitFactoryCreator<InputDriver>(
  inputDriverFactory,
);
export { InputDriver };

import {
  textDriverFactory,
  TextDriver,
} from '../components/Text/Text.protractor.driver';
export const textTestkitFactory = protractorTestkitFactoryCreator<TextDriver>(
  textDriverFactory,
);
export { TextDriver };

import { buttonDriverFactory } from '../components/Button/Button.driver';
export const buttonTestkitFactory = protractorUniTestkitFactoryCreator(
  buttonDriverFactory,
);

import {
  autocompleteDriverFactory,
  AutocompleteDriver,
} from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator<
  AutocompleteDriver
>(autocompleteDriverFactory);
export { AutocompleteDriver };

import { cardDriverFactory } from '../components/Card/Card.driver';
export const cardTestkitFactory = protractorUniTestkitFactoryCreator(
  cardDriverFactory,
);

import { tabsDriverFactory } from '../components/Tabs/Tabs.protractor.driver';
import { BaseDriver } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
export const tabsTestkitFactory = protractorTestkitFactoryCreator<BaseDriver>(
  tabsDriverFactory,
);

import { stripCardDriverFactory } from '../components/StripCard/StripCard.driver';
export const stripCardTestkitFactory = protractorUniTestkitFactoryCreator(
  stripCardDriverFactory,
);

import { gridDriverFactory } from '../components/Grid/Grid.driver';
export const gridTestkitFactory = protractorUniTestkitFactoryCreator(
  gridDriverFactory,
);

import {
  tooltipDriverFactory,
  TooltipProtractorDriver,
} from '../components/Tooltip/Tooltip.protractor.driver';
export const tooltipTestkitFactory = protractorTestkitFactoryCreator<TooltipProtractorDriver>(
    tooltipDriverFactory,
);
export { TooltipProtractorDriver };

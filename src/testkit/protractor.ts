import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';

import {inputDriverFactory, InputDriver} from '../components/Input/Input.protractor.driver';
export const inputTestkitFactory = protractorTestkitFactoryCreator<InputDriver>(inputDriverFactory);
export {InputDriver};

import {textDriverFactory, TextDriver} from '../components/Text/Text.protractor.driver';
export const textTestkitFactory = protractorTestkitFactoryCreator<TextDriver>(textDriverFactory);
export {TextDriver};

import {autocompleteDriverFactory, AutocompleteDriver} from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator<AutocompleteDriver>(autocompleteDriverFactory);
export {AutocompleteDriver};

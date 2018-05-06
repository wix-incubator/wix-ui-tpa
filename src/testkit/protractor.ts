import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';

import {inputDriverFactory, InputDriver} from '../components/Input/Input.protractor.driver';
export const inputTestkitFactory = protractorTestkitFactoryCreator<InputDriver>(inputDriverFactory);
export {InputDriver};

import {autocompleteDriverFactory, AutocompleteDriver} from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator<AutocompleteDriver>(autocompleteDriverFactory);
export {AutocompleteDriver};

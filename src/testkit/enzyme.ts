import {enzymeTestkitFactoryCreator, WrapperData} from 'wix-ui-test-utils/enzyme';

import {inputDriverFactory} from '../components/Input/Input.driver';
export const inputTestkitFactory: (obj: WrapperData) => any = enzymeTestkitFactoryCreator(inputDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory: (obj: WrapperData) => any = enzymeTestkitFactoryCreator(autocompleteDriverFactory);

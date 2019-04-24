import { {%componentName%}DriverFactory as coreDriver } from 'wix-ui-core/drivers/vanilla';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './{%ComponentName%}.st.css';

export const {%componentName%}DriverFactory = ({ element, eventTrigger }) => {
  const {%componentName%}Driver = coreDriver({ element, eventTrigger });

  return {
    ...{%componentName%}Driver,
    callMe: () => console.log('implement me'),
  };
};

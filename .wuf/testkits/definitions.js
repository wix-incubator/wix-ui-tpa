/*
 * This file exports object with config for component testkits.
 * Ideally there should be no config, it is used for cases that are not following convention.
 *
 * Glossary:
 *   regular components export testkits and pass sanity tests automatically (no config).
 *   non-regular components need additional config for export and sanity tests to be automated.
 *
 * { [component.displayName]: TestkitDefinition }
 *
 * [component.displayName] = {
 *   // what kind of drivers should be tested
 *   drivers?: ['vanilla', 'enzyme']
 *
 *   // set to true if testkit already has export in `test/generate-testkit-exports/enzyme.template
 *   // this is used for proxied components from other libraries (like wix-ui-backoffice)
 *   manualExport?: false;
 *
 *   // skip sanity tests for this component entirely.
 *   // this is likely an indication for a fix
 *   skipTestkitSanity?: false;
 *
 *   // Indicate that component does not have testkit at all.
 *   // It is sometimes ok not to have one.
 *   noTestkit?: false;
 *
 *   // Mark if component uses unidriver.
 *   // It is required for unidriver, because it is tested differently
 *   unidriver?: false;
 *
 *   // set path to testkit if path is not following convention
 *   // this file will be imported and wrapped with appropriate testkit factory
 *   // (one of testkitFactoryCreator, uniTestkitFactoryCreator, enzymeTestkitFactoryCreator or enzymeUniTestkitFactoryCreator
 *   testkitPath?: function;
 * }
 */

module.exports = {
  Button: {
    unidriver: true
  },

  Card: {
    unidriver: true
  },

  OverlappingCard: {
    unidriver: true
  },

  StripCard: {
    unidriver: true
  },

  Grid: {
    unidriver: true
  },

  StatesButton: {
    unidriver: true
  },

  Tabs: {
    unidriver: true
  },

  Divider: {
    noTestkit: true
  }
};

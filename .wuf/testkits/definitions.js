/*
 * This file exports object with config for components testkits.
 * The values are used in `.wuf/testkits/*.template.ejs` files
 *
 * more info: https://github.com/wix/wix-ui/blob/master/packages/wix-ui-framework/docs/testkits-definitions.md
 */

// legacyDriver means not unidriver
// TODO: legacy drivers should eventually be migrated to unidriver
module.exports = {
  Autocomplete: { legacyDriver: true },
  IconToggle: { legacyDriver: true },
  Input: { legacyDriver: true },
  LikeButton: { legacyDriver: true },
  Pagination: { legacyDriver: true },
  Text: { legacyDriver: true },
  ToggleSwitch: { legacyDriver: true, noTestkit: true },
  Tooltip: { legacyDriver: true },

  Divider: {
    // component does not have a testkit at all
    noTestkit: true
  }
};

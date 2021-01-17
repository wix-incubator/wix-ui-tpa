/*
 * This file exports object with config for components testkits.
 * The values are used in `.wuf/testkits/*.template.ejs` files
 *
 * more info: https://github.com/wix/wix-ui/blob/master/packages/wix-ui-framework/docs/testkits-definitions.md
 */

// legacyDriver means not unidriver
// TODO: legacy drivers should eventually be migrated to unidriver
module.exports = {
  Autocomplete: { legacyDriver: true, protractorLegacyTestkit: true },
  Divider: { noTestkit: true },
  IconToggle: { legacyDriver: true, protractorLegacyTestkit: true },
  Input: { legacyDriver: true, protractorLegacyTestkit: true },
  LikeButton: { legacyDriver: true, protractorLegacyTestkit: true },
  Pagination: { legacyDriver: true, protractorLegacyTestkit: true },
  Text: { legacyDriver: true, protractorLegacyTestkit: true },
  TextField: { legacyDriver: true, protractorLegacyTestkit: true },
  ToggleSwitch: { noTestkit: true },
  Tooltip: { legacyDriver: true, protractorLegacyTestkit: true },
};

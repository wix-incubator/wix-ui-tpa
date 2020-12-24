const files = [
  ['ActionsMenuLayout.bundle.min.js', 6],
  ['AddItem.bundle.min.js', 45.5],
  ['Autocomplete.bundle.min.js', 37],
  ['Avatar.bundle.min.js', 16],
  ['AvatarGroup.bundle.min.js', 19],
  ['Badge.bundle.min.js', 5],
  ['Button.bundle.min.js', 9],
  ['CalendarCell.bundle.min.js', 5],
  ['CalendarPopover.bundle.min.js', 10],
  ['Card.bundle.min.js', 5],
  ['Checkbox.bundle.min.js', 7],
  ['CheckboxGroup.bundle.min.js', 5],
  ['ColorPicker.bundle.min.js', 36],
  ['CopyUrlButton.bundle.min.js', 38],
  ['Counter.bundle.min.js', 34],
  ['DatePicker.bundle.min.js', 187],
  ['DatePickerInput.bundle.min.js', 209],
  ['Dialog.bundle.min.js', 11],
  ['Divider.bundle.min.js', 5],
  ['DotNavigation.bundle.min.js', 8],
  ['Dropdown.bundle.min.js', 47],
  ['Event.bundle.min.js', 8],
  ['FloatingDropdown.bundle.min.js', 39.5],
  ['Grid.bundle.min.js', 5],
  ['IconButton.bundle.min.js', 7],
  ['IconToggle.bundle.min.js', 6],
  ['Image.bundle.min.js', 13],
  ['Input.bundle.min.js', 6],
  ['LikeButton.bundle.min.js', 7],
  ['NewCard.bundle.min.js', 5],
  ['OverlappingCard.bundle.min.js', 5],
  ['Pagination.bundle.min.js', 10],
  ['Picker.bundle.min.js', 9],
  ['ProgressBar.bundle.min.js', 6],
  ['RadioButton.bundle.min.js', 7],
  ['RadioButtonGroup.bundle.min.js', 5],
  ['Ratings.bundle.min.js', 7.5],
  ['SectionNotification.bundle.min.js', 10],
  ['ShareButton.bundle.min.js', 8],
  ['SocialBar.bundle.min.js', 35],
  ['Spinner.bundle.min.js', 5],
  ['StatesButton.bundle.min.js', 10],
  ['StripCard.bundle.min.js', 5],
  ['Tabs.bundle.min.js', 17],
  ['Tags.bundle.min.js', 8],
  ['Text.bundle.min.js', 5],
  ['TextArea.bundle.min.js', 33],
  ['TextButton.bundle.min.js', 7],
  ['TextField.bundle.min.js', 37],
  ['Toast.bundle.min.js', 8],
  ['ToggleSwitch.bundle.min.js', 6],
  ['Tooltip.bundle.min.js', 31],
];

module.exports = {
  bundleSize: {
    files: files.map(([name, size]) => ({
      glob: `.perfer/dist/statics/${name}`,
      maxSize: `${size}kb`,
    })),
  },
};
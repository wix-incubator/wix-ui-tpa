module.exports = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.ts',
    description: 'Add story to the stories file',
  },
  {
    codemod: 'index-file.js',
    dist: 'src/components/index.ts',
    description: 'Add Component to the export all file',
  },
  {
    codemod: 'perfer-config-file.js',
    dist: 'perfer.config.js',
    description: 'Add a default threshold for the new component\'s bundles',
  },
];

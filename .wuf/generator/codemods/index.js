module.exports = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.tsx',
    description: 'Add story to the stories file',
  },
  {
    codemod: 'index-file.js',
    dist: 'src/components/index.ts',
    description: 'Add Component to the export all file',
  },
  {
    codemod: 'enzyme-file.js',
    dist: 'src/testkit/enzyme.ts',
    description: 'Add Enzyme Component driver to the enzyme file',
  },
  {
    codemod: 'testkit-file.js',
    dist: 'src/testkit/index.ts',
    description: 'Add Component driver to the testkit file',
  },
  {
    codemod: 'protractor-file.js',
    dist: 'src/testkit/protractor.ts',
    description: 'Add Component driver to the protractor file',
  }
]

const path = require('path');
const fs = require('fs');
const pathFinder = require('react-autodocs-utils/src/path-finder');
const types = require('@babel/types');
const {
  safeParse,
  StylableProcessor,
  processNamespace /*, Stylable*/,
} = require('@stylable/core');
const traverse = require('@babel/traverse').default;
const babelParser = require('@babel/parser');

const parse = source =>
  babelParser.parse(source, {
    plugins: [
      ['decorators', { decoratorsBeforeExport: true }],
      'jsx',
      'typescript',
      'classProperties',
      'objectRestSpread',
      'dynamicImport',
    ],
    sourceType: 'module',
  });

const parseStylable = source =>
  new StylableProcessor(undefined, processNamespace).process(safeParse(source))
    .rawAst;

const getImportedStylablePath = ast =>
  new Promise(resolve => {
    traverse(ast, {
      enter(astPath) {
        if (types.isImportDeclaration(astPath.node)) {
          const source = astPath.node.source.value;

          if (source.endsWith('.st.css')) {
            resolve(source);
            astPath.stop();
          }
        }
      },
    });

    resolve(null);
  });

const extractStylableVarStructure = ast =>
  ast.nodes
    .filter(node => node.type === 'rule' && node.selector === ':vars')
    .map(node => node.nodes)
    .flat(1);

const getAllStylableVars = ast => {
  const varStructure = extractStylableVarStructure(ast);

  const vars = {};
  let comment = '';

  varStructure.forEach(node => {
    if (node.type === 'comment') {
      comment = node.text;
    } else if (node.type === 'decl') {
      vars[node.prop] = {
        value: node.value,
        comment,
      };

      comment = '';
    }
  });

  return vars;
};

const getDefaultValue = (name, allVars) => {
  const defaultVarEntry = Object.entries(allVars).find(
    ([testName]) => testName === `Default${name}`,
  );

  if (!defaultVarEntry) {
    return '';
  }

  const [, info] = defaultVarEntry;

  return info.value;
};

const guessVarType = (name, value, defaultValue) => {
  const colorRegexp = /color/i;

  const colorRules = [
    () => name.match(colorRegexp),
    () => value.match(colorRegexp),
    () => defaultValue.match(colorRegexp),
  ];

  const fontRegexp = /font/i;
  const fontGuessRegexp = /[^A-Za-z_-]theme:/;

  const fontRules = [
    () => name.match(fontRegexp),
    () => value.match(fontRegexp),
    () => defaultValue.match(fontRegexp),
    () => defaultValue.match(fontGuessRegexp),
  ];

  const succeedingRule = rule => Boolean(rule());

  if (colorRules.find(succeedingRule)) {
    return 'color';
  }
  if (fontRules.find(succeedingRule)) {
    return 'font';
  }

  return 'number';
};

const parseComment = comment => {
  if (!comment) {
    return {
      description: '',
    };
  }

  const supportedTags = ['type', 'default', 'min', 'max', 'unit'];
  const commentParts = comment.split('@').map(part => part.trim());

  const description = commentParts.shift();

  const result = { description };

  commentParts.forEach(part => {
    for (const supportedTag of supportedTags) {
      if (part.startsWith(`${supportedTag} `)) {
        result[supportedTag] = part.substring(supportedTag.length + 1);
      }
    }
  });

  return result;
};

const getOverridableVars = ast => {
  const allVars = getAllStylableVars(ast);

  return Object.entries(allVars).reduce((result, [name, info]) => {
    if (info.value.startsWith('-')) {
      const defaultValue = getDefaultValue(name, allVars);
      const commentInfo = parseComment(info.comment);

      result.push({
        name,
        type: commentInfo.type || guessVarType(name, info.value, defaultValue),
        defaultValue: commentInfo.default || defaultValue,
        description: commentInfo.description,
      });
    }

    return result;
  }, []);
};

module.exports = async function({ source, metadata, basePath }) {
  const relativeComponentPath = await pathFinder(source);
  const data = { metadata };

  if (relativeComponentPath) {
    const absoluteComponentPath = path.resolve(basePath, relativeComponentPath);

    const componentSource = fs.readFileSync(absoluteComponentPath, {
      encoding: 'utf8',
    });
    const componentAst = parse(componentSource);

    const relativeStylablePath = await getImportedStylablePath(componentAst);

    if (relativeStylablePath) {
      const absoluteStylablePath = path.resolve(
          path.dirname(absoluteComponentPath),
          relativeStylablePath,
      );

      const stylableSource = fs.readFileSync(absoluteStylablePath, {
        encoding: 'utf8',
      });
      const stylableAst = parseStylable(stylableSource);

      const overridableVars = getOverridableVars(stylableAst);

      data.metadata = {
        ...data.metadata,
        stylable: {
          overridableVars,
        }
      }
    }
  }

  return data;
};

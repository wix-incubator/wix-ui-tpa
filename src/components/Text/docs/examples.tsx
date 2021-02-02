import { TEXT_PRIORITY } from '../constants';

export const importExample = `import { Text } from 'wix-ui-tpa/Text';`;

export const basic = `<Text>Some text</Text>`;

export const priority = (() =>
  `<div>${Object.values(TEXT_PRIORITY)
    .map((p) => `<p><Text priority='${p}'>Some text</Text></p>`)
    .join('')}</div>`)();

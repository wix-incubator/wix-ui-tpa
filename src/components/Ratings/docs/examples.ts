export const importExample = `import { Ratings } from 'wix-ui-tpa/Ratings';`;

export const defult = `
<Ratings onSelect={(() => {})} value={0} size="large" />
`;

export const inputWithValue = `
<Ratings onSelect={(() => {})} value={3} size="large" inputOptions={['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla']} />
`;

export const defaultDisplay = `
<Ratings mode="display" value={3} size="large" inputOptions={['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla']} />
`;

export const displayWithLables = `
<Ratings mode="display" value={3} size="large" countDisplay="150 ratings" ratingDisplay="3.0" />
`;

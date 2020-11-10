export const importExample = `import { Image } from 'wix-ui-tpa/Image';`;

export const regularImageExample = `
<Image
	src="https://static.wixstatic.com/media/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg/v1/fill/w_420,h_350,al_c,lg_1,q_80/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.webp"
	width="300"
	height="250"
	alt="Garfield smiles and puts his hand over chest"
/>
`;

export const mediaImageExample = `
<Image
	mediaItem={{
		uri: 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg',
		width: 300,
		height: 250,
	}}
	alt="Garfield smiles and puts his hand over chest"
/>
`;

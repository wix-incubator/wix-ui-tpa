export const importExample = `import { Image } from 'wix-ui-tpa/Image';`;

export const absoluteUrlExample = `
<Image
  src="https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
  width="480"
  height="360"
  alt="Garfield smiles and puts his hand over chest"
/>
`;

export const relativeUriExample = `
<Image
  src="c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg"
  width="480"
  height="360"
  alt="Garfield smiles and puts his hand over chest"
/>
`;

export const resizingExample = `
<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <Image
    src="https://static.wixstatic.com/media/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg/v1/fill/w_480,h_360,al_c,lg_1,q_80/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.webp"
    width="300"
    height="250"
    alt="Garfield smiles and puts his hand over chest"
    resize="contain"
  />
  <Image
    src="https://static.wixstatic.com/media/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg/v1/fill/w_480,h_360,al_c,lg_1,q_80/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.webp"
    width="300"
    height="250"
    alt="Garfield smiles and puts his hand over chest"
    resize="cover"
  />
</div>
`;

export const aspectRatioExample = `
<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <Image
    src="c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg"
    width="300"
    alt="Garfield smiles and puts his hand over chest"
    resize="cover"
    aspectRatio={1}
  />
  <Image
    src="c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg"
    width="300"
    alt="Garfield smiles and puts his hand over chest"
    resize="cover"
    aspectRatio={1.777}
  />
  <Image
    src="c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg"
    width="300"
    alt="Garfield smiles and puts his hand over chest"
    resize="cover"
    aspectRatio={1.333}
  />
</div>
`;

export const blurLoadingExample = `
class MediaImageWithBlurryLoading extends React.Component {
  state = {
    renderer: Date.now(),
  };

  _reload() {
    this.setState({ renderer: Date.now() });
  }

  render() {
    const { renderer } = this.state;

    return (
      <>
        <Image
          key={renderer}
          src="c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg"
          width="480"
          height="360"
          loadingBehavior="blur"
        />
        <Button onClick={() => this._reload()}>Reload</Button>
      </>
    );
  }
}
`;

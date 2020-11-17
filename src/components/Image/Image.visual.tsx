import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { Image, ImageProps } from './';

const sampleUrl =
  'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg';

type ImageWrapperProps = ImageProps & { onDone(): void };

class ImageWrapper extends React.Component<ImageWrapperProps> {
  state = { hasError: false };

  onError(onDone: ImageWrapperProps['onDone']) {
    this.setState({ hasError: true }, onDone);
  }

  render() {
    const { onDone, ...imageProps } = this.props;
    const { hasError } = this.state;
    const style = hasError ? { border: '1px solid red' } : null;

    return (
      <div style={style}>
        <Image {...imageProps} onError={() => this.onError(onDone)} />
      </div>
    );
  }
}

visualize('Image', () => {
  story('render', () => {
    snap('default', done => <Image src={sampleUrl} onLoad={done} />);
    snap('with width & height', done => (
      <Image src={sampleUrl} width={200} height={200} onLoad={done} />
    ));
    snap(
      'with alt',
      <Image alt="Garfield smiles and puts his hand over chest" />,
    );
    snap('with mediaItem', done => (
      <Image
        mediaItem={{
          uri: 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg',
          width: 400,
          height: 400,
        }}
        onLoad={done}
      />
    ));
    snap('onError', done => (
      <ImageWrapper src="invalid-resource" onDone={done} />
    ));
  });
});

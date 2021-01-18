import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { Image, ImageProps } from './';

const stories: { name: string; src: string; invalidSrc: string }[] = [
  {
    name: 'Absolute URL',
    src:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
    invalidSrc: 'https://invalid.something/resource.jpg',
  },
  {
    name: 'Relative URI',
    src: 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg',
    invalidSrc: 'invalid-resource.jpg',
  },
];

type ImageWrapperProps = ImageProps & { onDone(): void };

class ImageWrapper extends React.Component<ImageWrapperProps> {
  state = { hasError: false };

  onError(onDone: ImageWrapperProps['onDone']) {
    this.setState({ hasError: true }, () => setTimeout(() => onDone(), 500));
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
  stories.forEach(({ name, src, invalidSrc }) => {
    story(name, () => {
      snap('default', (done) => (
        <Image src={src} width={480} height={360} onLoad={done} />
      ));
      snap('with width & height', (done) => (
        <Image src={src} width={200} height={200} onLoad={done} />
      ));
      snap('with onError', (done) => (
        <ImageWrapper src={invalidSrc} onDone={done} />
      ));
      snap('with blurry loading', (done) => (
        <Image
          src={src}
          width={200}
          height={200}
          loadingBehavior="blur"
          onLoad={done}
        />
      ));

      story('with aspectRatio', () => {
        snap('as square', (done) => (
          <Image src={src} width={480} aspectRatio="square" onLoad={done} />
        ));
        snap('as cinema', (done) => (
          <Image src={src} width={480} aspectRatio="cinema" onLoad={done} />
        ));
        snap('as landscape', (done) => (
          <Image src={src} width={480} aspectRatio="landscape" onLoad={done} />
        ));
        snap('as custom number', (done) => (
          <Image src={src} width={480} aspectRatio={1.5} onLoad={done} />
        ));
      });

      story('with resize', () => {
        snap('as contain', (done) => (
          <Image
            src={src}
            width={300}
            height={250}
            resize="contain"
            onLoad={done}
          />
        ));
        snap('as cover', (done) => (
          <Image
            src={src}
            width={300}
            height={250}
            resize="cover"
            onLoad={done}
          />
        ));
      });
    });
  });
});

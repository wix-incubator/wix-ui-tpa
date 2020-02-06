import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GALLERY_CONSTS, ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { Button, PRIORITY } from '../src/components/Button';
import styles from './stores.st.css';

const imageSize = 200;

const items = [1, 2, 3, 4, 5, 6, 7, 8].map(id => ({
  // Image item:
  itemId: `${id}`,
  mediaUrl: `https://picsum.photos/${imageSize}`,
  metaData: {
    type: 'image',
    height: imageSize,
    width: imageSize,
    title: `Product ${id}`,
    description: 'sample-description',
    focalPoint: [0, 0],
  },
}));

items.push({
  // @ts-ignore
  itemId: '9',
  // @ts-ignore
  html: `<div style='width: 300px; height: 200px; red; text-align: center; padding: 20px;'>
          <p style="line-height:40px; padding:50px; font-size: 21px;">I am an HTML block</p>
        </div>`,
  metadata: {
    type: 'text',
    height: 200,
    width: 300,
    title: `Product 9`,
    description: '',
    backgroundColor: 'red',
  },
});

const styleParamsByLayout = () => ({
  collage: {
    galleryLayout: 0,
    showArrows: false,
    cubeImages: false,
    groupSize: 3,
    groupTypes: '1,2h,2v,3t,3b,3l,3r',
    fixedColumns: 0,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isSlider: false,
    isMasonry: false,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
  },
  masonry: {
    galleryLayout: 1,
    showArrows: false,
    cubeImages: false,
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: 0,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isSlider: false,
    isMasonry: true,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
    oneRow: false,
  },
  grid: {
    galleryLayout: 2,
    showArrows: false,
    // cubeImages: true,
    smartCrop: false,
    cubeType: 0,
    isVertical: true,
    galleryType: 'Columns',
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: undefined,
    hasThumbnails: false,
    enableScroll: true,
    cropOnlyFill: false,
    isSlider: false,
    isColumns: false,
    isGrid: true,
    placeGroupsLtr: true,
    isMasonry: false,
    isSlideshow: false,
    minItemSize: 50,
  },
  thumbnails: {
    galleryLayout: 3,
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: '100%/100%',
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    gallerySize: Infinity,
    groupTypes: '1',
    oneRow: true,
    hasThumbnails: true,
    enableScroll: false,
    isGrid: false,
    isSlider: false,
    isMasonry: false,
    isColumns: false,
    isSlideshow: false,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
    thumbnailSize: 120,
  },
  slider: {
    galleryLayout: 4,
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    gallerySize: Infinity,
    oneRow: true,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isSlider: true,
    isColumns: false,
    isMasonry: false,
    isSlideshow: false,
    cropOnlyFill: true,
  },
  slideshow: {
    galleryLayout: 5,
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeRatio: '100%/100%',
    cubeType: 'fill',
    isVertical: false,
    gallerySize: 550,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    fixedColumns: 1,
    oneRow: true,
    hasThumbnails: false,
    enableScroll: false,
    isGrid: false,
    isColumns: false,
    isMasonry: false,
    isSlider: false,
    isSlideshow: true,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
  },
  panorama: {
    galleryLayout: 6,
    showArrows: false,
    cubeImages: false,
    isVertical: true,
    galleryType: 'Columns',
    groupSize: 1,
    groupTypes: '1',
    gallerySize: Infinity,
    oneRow: false,
    fixedColumns: 1,
    hasThumbnails: false,
    enableScroll: true,
    isGrid: false,
    isColumns: false,
    isMasonry: false,
    isSlider: false,
    isSlideshow: false,
    cropOnlyFill: false,
  },
  column: {
    galleryLayout: 7,
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: 0.35,
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    groupTypes: '1',
    gallerySize: Infinity,
    fixedColumns: 0,
    hasThumbnails: false,
    oneRow: true,
    enableScroll: true,
    isGrid: false,
    isColumns: true,
    isMasonry: false,
    isSlider: false,
    isSlideshow: false,
    cropOnlyFill: false,
  },
  fullsize: {
    showArrows: true,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: '100%/100%',
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    gallerySize: Infinity,
    groupTypes: '1',
    oneRow: true,
    hasThumbnails: false,
    enableScroll: false,
    isGrid: false,
    isSlider: false,
    isColumns: false,
    isMasonry: false,
    isSlideshow: true,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
  },
  magic: {
    galleryLayout: 8,
    showArrows: false,
    cubeImages: true,
    smartCrop: false,
    cubeType: 'fill',
    cubeRatio: '100%/100%',
    isVertical: false,
    galleryType: 'Strips',
    groupSize: 1,
    gallerySize: Infinity,
    groupTypes: '1',
    oneRow: true,
    hasThumbnails: false,
    enableScroll: false,
    isGrid: false,
    isSlider: false,
    isColumns: false,
    isMasonry: false,
    isSlideshow: false,
    cropOnlyFill: false,
    floatingImages: 0,
    galleryMargin: 0,
    imageMargin: 0,
  },
  empty: {
    galleryLayout: -1,
  },
});

storiesOf('pro-gallery', module).add('Stores', () => {
  const options = {
    galleryLayout: 5,
    imageMargin: 10,
    slideshowInfoSize: 200,
    enableInfiniteScroll: true,
    hoveringBehaviour: 'APPEARS',
    itemClick: 'expand',
    arrowsSize: 23,
    imageLoadingMode: 'BLUR',
    scrollAnimation: 'NO_EFFECT',
    imageQuality: 90,
    videoPlay: 'hover',
    videoSpeed: '1',
    videoLoop: true,
  };
  return <MyGallery columns={4}/>;
});

function calculateMaxWidth(columns) {
  return columns
    ? 234 * columns + 24 * (columns - 1)
    : Number.POSITIVE_INFINITY;
}

class MyGallery extends React.Component {
  state = {
    container: {
      width: Math.min(window.innerWidth, calculateMaxWidth(this.props.columns)),
      height: window.innerHeight,
    },
    hovered: -1,
  };
  private _myTimeout: number;

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    this.setState({
      container: {
        width: Math.min(
          window.innerWidth,
          calculateMaxWidth(this.props.columns),
        ),
        height: window.innerHeight,
      },
    });
  };

  _eventHandler = (eName, eData) => {
    clearTimeout(this._myTimeout);
    if (eName === 'HOVER_SET') {
      // @ts-ignore
      this._myTimeout = setTimeout(() => {
        this.setState({ hovered: eData });
      }, 10);
    }
  };

  render() {
    const { hovered, container } = this.state as any;

    return (
      <ProGallery
        domId={'onetwothree'}
        items={items}
        options={{
          ...styleParamsByLayout().grid,
          imageMargin: 24,
          gridStyle: 1,
          titlePlacement: GALLERY_CONSTS.placements.SHOW_BELOW,
          textBoxHeight: 132,
          calculateTextBoxHeightMode: GALLERY_CONSTS.calculationOptions.MANUAL,
          numberOfImagesPerCol: this.props.columns,
          hoveringBehaviour: GALLERY_CONSTS.infoBehaviourOnHover.NEVER_SHOW,
          allowSocial: false,
          loveButton: false,
        }}
        container={container}
        scrollingElement={() => document.getElementById('gallery') || window}
        eventsListener={this._eventHandler}
        customHoverRenderer={() => null}
        customInfoRenderer={itemProps => (
          <ProductInfo {...itemProps} showButtons={hovered === itemProps.idx} />
        )}
      />
    );
  }
}

class ProductInfo extends React.Component<any, any> {
  render() {
    return (
      <div {...styles('root', {})}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.price}>{`$${50 + this.props.id}`}</div>
        {this.props.showButtons ? (
          <Button className={styles.button} priority={PRIORITY.primary}>
            Add to Cart
          </Button>
        ) : null}
      </div>
    );
  }
}

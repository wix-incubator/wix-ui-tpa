import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GALLERY_CONSTS, ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { Button, PRIORITY } from '../src/components/Button';
import styles from './stores.st.css';

const GALLERY_ID = 'myGallery';
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

function calculateMaxWidth(columns) {
  return columns
    ? 234 * columns + 24 * (columns - 1)
    : Number.POSITIVE_INFINITY;
}

class MyGallery extends React.Component<{ columns?: number }> {
  state = {
    container: this._getContainer(),
    hovered: -1,
  };
  private _myTimeout: number;

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
    this.setState({
      container: this._getContainer(),
    });
  }

  _getContainer() {
    const wrapper = document.querySelector(`#${GALLERY_ID}`) || window;
    console.log('adler', 'proGalleryStores.tsx:289', wrapper);

    return {
      width: Math.min(
        (wrapper as any).innerWidth,
        calculateMaxWidth(this.props.columns),
      ),
      height: (wrapper as any).innerHeight,
    };
  }

  _handleResize = () => {
    this.setState({
      container: this._getContainer(),
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
          fixedColumns: !!this.props.columns,
          imageMargin: 24,
          // tslint:disable-next-line:no-extra-boolean-cast
          gridStyle: !!this.props.columns ? 1 : 0,
          titlePlacement: GALLERY_CONSTS.placements.SHOW_BELOW,
          textBoxHeight: 132,
          calculateTextBoxHeightMode: GALLERY_CONSTS.calculationOptions.MANUAL,
          numberOfImagesPerRow: this.props.columns,
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

function StoresStory() {
  const [isResponsive, setResponsive] = React.useState(true);
  const [colNum, setColNum] = React.useState(1);

  return (
    <div style={{ display: 'flex', maxWidth: '100%' }}>
      <div
        style={{
          width: 200,
          borderRight: '1px solid #ddd',
          marginRight: 30,
          flexShrink: 0,
        }}
      >
        <input
          type="checkbox"
          id="responsive"
          checked={isResponsive}
          onChange={() => setResponsive(!isResponsive)}
        />
        <label htmlFor="responsive">Fit to screen</label>
        <br />
        <br />
        <label
          htmlFor="colNum"
          style={{ display: 'inline-block', marginBottom: 6 }}
        >
          Number of Columns: {isResponsive ? '--' : colNum}
        </label>
        <br />
        <input
          type="range"
          min={1}
          max={5}
          disabled={isResponsive}
          value={colNum}
          onInput={e => setColNum((e.target as any).value)}
        />
      </div>
      <div id={GALLERY_ID} style={{ flex: '1 1 auto', minWidth: 0 }}>
        <MyGallery columns={isResponsive ? undefined : colNum} />
      </div>
    </div>
  );
}

storiesOf('pro-gallery', module).add('Stores', () => <StoresStory />);

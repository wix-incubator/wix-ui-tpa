import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PixelFrame } from './PixelFrame';
import { TPAComponentsProvider } from '../../src/components/TPAComponentsConfig';
import { st, classes } from './MobileExample.st.css';

export class MobileExample extends React.Component<{
  isRtl?: boolean;
  onMobileReady?(): void;
}> {
  static defaultProps = {
    isRtl: false,
  };
  private readonly _frameRef = React.createRef<HTMLIFrameElement>();
  private _frameBody: HTMLElement;

  _onIframeLoad = () => {
    if (this._frameRef.current) {
      this._frameBody = this._frameRef.current.contentDocument.getElementById(
        'mobile-root',
      );
      this.forceUpdate(this.props.onMobileReady);
    }
  };

  _getContent() {
    const { children, isRtl } = this.props;
    return (
      <TPAComponentsProvider value={{ mobile: true, rtl: isRtl }}>
        {children}
      </TPAComponentsProvider>
    );
  }

  render() {
    return (
      <div className={st(classes.root)}>
        <iframe
          frameBorder="0"
          ref={this._frameRef}
          src="iframe.html?id=tests--mobilepage"
          onLoad={this._onIframeLoad}
        >
          {this._frameBody &&
            ReactDOM.createPortal(this._getContent(), this._frameBody)}
        </iframe>
        <PixelFrame className={classes.frame} />
      </div>
    );
  }
}

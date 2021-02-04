import * as React from 'react';
import { TPAComponentsProvider } from '../components/TPAComponentsConfig';
import { MobileExample } from '../../stories/utils/MobileExample';

export class AsyncVisualTestWrapper extends React.Component<{
  isMobile: boolean;
  isRtl: boolean;
  onDoneCallback(): void;
  onDoneTimeout?: number;
}> {
  static defaultProps = {
    onMountTimeout: 1000,
  };

  onDone = () =>
    setTimeout(
      () => this.props.onDoneCallback(),
      this.props.onDoneTimeout,
    );

  componentDidMount() {
    !this.props.isMobile && this.onDone();
  }

  render() {
    const { isMobile, isRtl, children } = this.props;
    return (
      <>
        {isMobile ? (
          <MobileExample isRtl={isRtl} onMobileReady={this.onDone}>
            <div dir={isRtl ? 'rtl' : 'ltr'}>{children}</div>
          </MobileExample>
        ) : (
          <TPAComponentsProvider
            value={{ mobile: false, rtl: isRtl }}
          >
            <div dir={isRtl ? 'rtl' : 'ltr'}>{children}</div>
          </TPAComponentsProvider>
        )}
      </>
    );
  }
}

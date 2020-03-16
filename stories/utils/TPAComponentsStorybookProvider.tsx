import * as React from 'react';
import {
  TPAComponentsProvider,
  TPAComponentsConfig,
} from '../../src/components/TPAComponentsConfig';

interface TPAComponentsStorybookProviderState {
  rtl: boolean;
}

type TPAComponentsStorybookProviderProps = Omit<TPAComponentsConfig, 'rtl'>;

export class TPAComponentsStorybookProvider extends React.Component<
  TPAComponentsStorybookProviderProps,
  TPAComponentsStorybookProviderState
> {
  state = {
    rtl: false,
  };
  private rootRef: React.RefObject<HTMLDivElement>;
  private observer: MutationObserver;

  constructor() {
    // @ts-ignore
    super();
    this.rootRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount(): void {
    if (this.rootRef && this.rootRef.current) {
      this.observer = new MutationObserver(mutationsList => {
        mutationsList.map(mutation => {
          if (mutation.attributeName === 'dir') {
            this.setState({
              rtl:
                (this.rootRef.current.parentNode as any).getAttribute('dir') ===
                'rtl',
            });
          }
        });
      });

      this.observer.observe(this.rootRef.current.parentNode, {
        attributes: true,
      });
    }
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const { rtl } = this.state;
    const { mobile } = this.props;

    return (
      <div ref={this.rootRef}>
        <TPAComponentsProvider value={{ mobile, rtl }}>
          {this.props.children}
        </TPAComponentsProvider>
      </div>
    );
  }
}

import * as React from 'react';
import { TPAComponentsProvider } from '../../src/components/TPAComponentsConfig';

// tslint:disable:react-hooks-nesting
export const storyComponent = (Component) => {
  return (props) => {
    const { mobile = false, ...rest } = props;
    const [rtl, setRtl] = React.useState(false);
    const rootRef = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
      if (rootRef && rootRef.current) {
        const observer = new MutationObserver((mutationsList) => {
          mutationsList.map((mutation) => {
            if (mutation.attributeName === 'dir') {
              setRtl(
                (rootRef.current.parentNode as any).getAttribute('dir') ===
                  'rtl',
              );
            }
          });
        });

        observer.observe(rootRef.current.parentNode, { attributes: true });

        return function cleanup() {
          observer.disconnect();
        };
      }
    }, [rootRef]);

    return (
      <div ref={rootRef}>
        <TPAComponentsProvider value={{ mobile, rtl }}>
          <Component {...rest} />
        </TPAComponentsProvider>
      </div>
    );
  };
};
// tslint:enable:react-hooks-nesting

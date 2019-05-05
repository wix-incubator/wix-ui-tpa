import * as React from 'react';

export interface WixUiTpaConfig {
  mobile: boolean;
}

export interface WixUiTpaConfigProps {
  mobile?: boolean;
}

const wixUiTpaConfig = React.createContext<WixUiTpaConfig>({
  mobile: false,
});

export const WixUiTpaConfigProvider = wixUiTpaConfig.Provider;

export const WixUiTpaConfigConsumer = wixUiTpaConfig.Consumer;

export const withWixUiTpaConfig = <TProps extends object>(
  WrappedComponent: React.FunctionComponent<TProps>,
): React.FunctionComponent<TProps> =>
  (props) => {
    return (
      <WixUiTpaConfigConsumer>
        {(context: WixUiTpaConfig) => {
          const deviceTypeProps = {
            mobile: context.mobile,
          };
          return <WrappedComponent {...props} {...deviceTypeProps} />;
        }}
      </WixUiTpaConfigConsumer>
    );
  };

export const WixUiTpaConfigWrapper = ({mobile = false}) => {
  return Component => {
    return (
      <WixUiTpaConfigProvider value={{ mobile }}>
        {Component}
      </WixUiTpaConfigProvider>
    );
  };
};


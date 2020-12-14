import * as React from 'react';

export enum Theme {
  WIRED = 'WIRED',
  BW = 'BW',
}

export interface IThemeContext {
  theme: Theme;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: Theme.WIRED,
});

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;

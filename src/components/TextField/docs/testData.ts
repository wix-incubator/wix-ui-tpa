import { TextFieldTheme } from '../TextFieldEnums';

export const cases: {
  themes: string[];
  variations: { title: string; props: {} }[];
  states: { title: string; props: {} }[];
} = {
  themes: Object.values(TextFieldTheme),
  variations: [
    {
      title: 'placeholder',
      props: {
        placeholder: 'This is placeholder.',
      },
    },
    {
      title: 'value',
      props: {
        value: 'This is value.',
      },
    },
  ],
  states: [
    {
      title: 'default',
      props: {},
    },
    {
      title: 'disabled',
      props: { disabled: true },
    },
    {
      title: 'success',
      props: { success: true },
    },
    {
      title: 'error',
      props: { error: true },
    },
    {
      title: 'error with errorMessage',
      props: {
        error: true,
        errorMessage: 'This is test error message',
      },
    },
  ],
};

export function generateDataHook(
  themeTitle: string,
  variationTitle: string,
  stateTitle: string,
) {
  return `theme-${themeTitle}-state-${stateTitle}-with-${variationTitle}`.replace(
    / +/g,
    '',
  );
}

export const dataHooks = [];

cases.themes.forEach((theme) => {
  cases.variations.forEach((variation) => {
    cases.states.forEach((state) => {
      dataHooks.push(generateDataHook(theme, variation.title, state.title));
    });
  });
});

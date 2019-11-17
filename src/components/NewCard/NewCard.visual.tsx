import * as React from 'react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { NewCardWiringExample } from './docs/NewCardWiringExample';
import { visualize, story, snap } from 'storybook-snapper';
import { newCardDriverFactory, NewCardDriver } from './NewCard.driver';
import { NewCardProps } from '.';

const createDriver = uniTestkitFactoryCreator(newCardDriverFactory);
const dataHook = 'storybook-e2e-NewCard';

interface NewCardVisualProps {
  newCardProps: NewCardProps;
}

class NewCardVisual extends React.Component<NewCardVisualProps> {
  static defaultProps = {
    newCardProps: {},
  };
  private driver: NewCardDriver;

  componentDidMount(): void {
    this.driver = createDriver({ wrapper: document.body, dataHook });
  }

  render() {
    return <NewCardWiringExample />;
  }
}

visualize('New Card', () => {
  story('render', () => {
    snap('all states', <NewCardVisual />);
  });
});

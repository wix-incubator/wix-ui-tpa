import * as React from 'react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { NewCardWiringExample } from './docs/NewCardWiringExample';
import { visualize, story, snap } from 'storybook-snapper';
import { newCardDriverFactory, NewCardDriver } from './NewCard.driver';
import { NewCardProps } from '.';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';

const createDriver = uniTestkitFactoryCreator(newCardDriverFactory);
const dataHook = 'storybook-e2e-NewCard';

interface NewCardVisualProps {
  newCardProps: NewCardProps;
  onDone(TabsDriver): void;
}

class NewCardVisual extends React.Component<NewCardVisualProps> {
  static defaultProps = {
    newCardProps: {},
    onDone: () => {},
  };
  private driver: NewCardDriver;

  componentDidMount(): void {
    this.driver = createDriver({ wrapper: document.body, dataHook });

    onStyleProcessorDone()
      .then(async () => {
        const { onDone } = this.props as any;
        try {
          onDone && (await onDone(this.driver));
        } catch (e) {}
      })
      .catch(() => {});
  }

  render() {
    return (
      <div>
        <NewCardWiringExample />
      </div>
    );
  }
}

visualize('New Card', () => {
  const renderTest = (onDone?: (any?) => (TabsDriver) => void) => {
    return done => <NewCardVisual onDone={onDone && onDone(done)} />;
  };

  story('render', () => {
    snap('all states', renderTest());
  });
});

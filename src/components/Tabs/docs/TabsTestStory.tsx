import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '..';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const items = [
  { title: 'Title 1' },
  { title: 'Title 2' },
  { title: 'Title 3' },
  { title: 'Title 4' },
  { title: 'Title 5' },
  { title: 'Title 6' },
  { title: 'Title 7' },
  { title: 'Title 8' },
  { title: 'Title 9' },
  { title: 'Title 10' },
];

class TabsE2eTest extends React.Component {
  private _observer: MutationObserver;
  private readonly _rootRef;

  state = {
    rtl: false,
  };

  constructor(props) {
    super(props);
    this._rootRef = React.createRef();
  }

  componentDidMount() {
    if (this._rootRef.current) {
      this._observer = new MutationObserver((mutationsList) => {
        mutationsList.map((mutation) => {
          if (mutation.attributeName === 'dir') {
            const rtl = this._rootRef.current.getAttribute('dir') === 'rtl';
            this.setState({ rtl });
          }
        });
      });

      this._observer.observe(this._rootRef.current, { attributes: true });
    }
  }

  componentWillUnmount() {
    this._observer.disconnect();
  }

  render() {
    const { rtl } = this.state;

    return (
      <div
        id="tabs-test-root"
        style={{ margin: '10px', maxWidth: 200 }}
        ref={this._rootRef}
        dir="ltr"
      >
        <TPAComponentsProvider value={{ rtl }}>
          <Tabs
            data-hook={'storybook-e2e-Tabs'}
            items={items}
            {...this.props}
          />
        </TPAComponentsProvider>
      </div>
    );
  }
}

storiesOf(StoryCategory.TESTS, module).add('Tabs', () => <TabsE2eTest />);

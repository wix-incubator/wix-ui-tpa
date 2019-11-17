import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '..';

const kind = 'Tests';

class AvatarTestStory extends React.Component {
  state = {
    loaded: false,
  };

  _onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    const defaultProps = {
      src:
        'https://static.wixstatic.com/media/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg/v1/fill/w_120,h_120/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg',
      onLoad: this._onLoad,
    };

    return (
      <div style={{ margin: '10px', maxWidth: 200 }} data-img-loaded={loaded}>
        <Avatar
          data-hook={'storybook-e2e-Avatar'}
          {...defaultProps}
          {...this.props}
        />
      </div>
    );
  }
}

function renderTest(props?: any) {
  return <AvatarTestStory {...props} />;
}

storiesOf(kind, module).add('Avatar', renderTest);

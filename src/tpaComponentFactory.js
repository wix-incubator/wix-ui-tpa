import React from 'react';
import {array, object} from 'prop-types';
import Wix from 'Wix';

export function tpaComponentFactory({CoreComponent, theme}) {
  class TpaComponent extends React.PureComponent {
    static propTypes = {
      wixBindings: object,
      events: array
    }

    static defaultProps = {
      wixBindings: {},
      events: ['STYLE_PARAMS_CHANGE', 'THEME_CHANGE']
    }

    constructor(props) {
      super(props);
      this.update = this.update.bind(this);
      this.state = {
        calculatedTheme: theme(props.wixBindings),
        events: props.events.filter(event => Wix.Events[event] !== undefined)
      };
    }

    componentDidMount() {
      this.state.events.forEach(event => Wix.addEventListener(Wix.Events[event], this.update));
    }

    componentWillUnmout() {
      this.state.events.forEach(event => Wix.removeEventListener(Wix.Events[event], this.update));
    }

    update(data) {
      const {wixBindings} = this.props;
      this.setState({calculatedTheme: theme(wixBindings, data)});
    }

    render() {
      // eslint-disable-next-line no-unused-vars
      const {wixBindings, events, ...coreProps} = this.props;
      return <CoreComponent {...coreProps} theme={this.state.calculatedTheme}/>;
    }
  }
  return TpaComponent;
}

import React from 'react';
import {func, node, array, object, oneOfType} from 'prop-types';
import Wix from 'Wix';

export class ResponsiveThemedComponent extends React.PureComponent {
  static propTypes = {
    children: node,
    theme: oneOfType([func, object]),
    events: array
  }

  static defaultProps = {
    children: null,
    theme: () => {},
    events: ['STYLE_PARAMS_CHANGE', 'THEME_CHANGE']
  }

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      calculatedTheme: getTheme(props.theme),
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
    this.setState({calculatedTheme: getTheme(this.props.theme, data)});
  }

  render() {
    const {calculatedTheme} = this.state;
    return React.cloneElement(this.props.children, {theme: calculatedTheme});
  }
}

function getTheme(theme, params) {
  return typeof theme === 'function' ? theme(params) : theme;
}

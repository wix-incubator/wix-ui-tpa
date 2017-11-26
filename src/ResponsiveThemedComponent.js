import React from 'react';
import {func, node, array} from 'prop-types';
import Wix from 'Wix';

class SdkThemeGenerator extends React.PureComponent {
  static propTypes = {
    children: func.isRequired,
    theme: func.isRequired,
    events: array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      calculatedTheme: props.theme(),
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
    this.setState({calculatedTheme: this.props.theme(data)});
  }

  render() {
    return (
      <div>{this.props.children({calculatedTheme: this.state.calculatedTheme})}</div>
    );
  }
}

export const ResponsiveThemedComponent = ({children, theme, events}) => (
  <SdkThemeGenerator theme={theme} events={events}>
    {({calculatedTheme}) => React.cloneElement(children, {theme: calculatedTheme})}
  </SdkThemeGenerator>
);

ResponsiveThemedComponent.propTypes = {
  children: node,
  theme: func,
  events: array
};

ResponsiveThemedComponent.defaultProps = {
  children: null,
  theme: () => {},
  events: ['STYLE_PARAMS_CHANGE']
};


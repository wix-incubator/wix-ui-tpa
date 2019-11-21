export const connectedComponent = ({ component, metadata }) => {
  const id = 'tpaComponentExample';

  const oldStyle = document.getElementById(id);

  if (oldStyle) {
    oldStyle.parentNode.removeChild(oldStyle);
  }

  const { css } = metadata.stylable;
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.type = 'text/css';
  style.id = id;

  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  // Below is example of how to add class if needed

  // const className = `${component.props.className || ''}`;
  // return component.type({ ...component.props, className });

  return component;
};

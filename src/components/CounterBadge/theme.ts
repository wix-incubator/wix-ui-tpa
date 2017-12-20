const HEIGHT = '18px';
const PADDING = '3px 6px';
const BORDER_RADIUS = '12px';

export const theme = ({wixBindings, colors, fonts}) => {
  const badgeBgColor = colors[wixBindings.backgroundColor] || {};
  const badgeColor = colors[wixBindings.color] || {};
  const badgeFonts = fonts[wixBindings.fonts] || {};

  return {
    height: HEIGHT,
    padding: PADDING,
    borderRadius: BORDER_RADIUS,

    fontSize: badgeFonts.size,
    fontFamily: badgeFonts.family,
    fontStyle: badgeFonts.style && badgeFonts.style.italic ? 'italic' : 'normal',
    fontWeight: badgeFonts.style && badgeFonts.style.bold ? 'bold' : 'normal',
    textDecoration: badgeFonts.style && badgeFonts.style.underline ? 'underline' : 'none',

    backgroundColor: badgeBgColor.value,
    borderColor: badgeBgColor.value,
    color: badgeColor.value
  };
};

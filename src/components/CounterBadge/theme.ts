export const theme = ({wixBindings, colors, fonts}) => {
  const badgeBgColor = colors[wixBindings.backgroundColor].value;
  const badgeColor = colors[wixBindings.color].value;
  const badgeFonts = fonts[wixBindings.fonts];

  return {
    fontSize: badgeFonts.size,
    fontFamily: badgeFonts.family,
    fontStyle: badgeFonts.style.italic ? 'italic' : 'normal',
    fontWeight: badgeFonts.style.bold ? 'bold' : 'normal',
    textDecoration: badgeFonts.style.underline ? 'underline' : 'none',

    backgroundColor: badgeBgColor,
    borderColor: badgeBgColor,
    color: badgeColor
  };
};

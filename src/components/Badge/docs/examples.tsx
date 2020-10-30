export const importExample = `import { Badge, BADGE_PRIORITY } from 'wix-ui-tpa/Badge';`;

export const overrideExample = `
() => {
  \`
  //BadgeOverrides.st.css
  :import {
    -st-from: "wix-ui-tpa/dist/src/components/Badge.st.css";
    -st-named: badgeOverrides;
  }

  .root {
    -st-mixin: badgeOverrides(
        BadgeBgColor '"color(--badgeBgColor)"',
        BadgeTextColor '"color(--badgeTextColor)"',
    );
  }\`

  return <Badge className={BadgeOverrides.classes.root}>Badge with connected params</Badge>
}
`;

export const priority = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <Badge priority={BADGE_PRIORITY.default}>Default Badge</Badge>
    <Badge priority={BADGE_PRIORITY.primary}>Primary Badge</Badge>
    <Badge priority={BADGE_PRIORITY.light}>Light Badge</Badge>
  </div>
`;

export const icons = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <Badge priority={BADGE_PRIORITY.default} icon={<Camera/>}>Default Badge</Badge>
    <Badge priority={BADGE_PRIORITY.primary} icon={<Camera/>}>Primary Badge</Badge>
    <Badge priority={BADGE_PRIORITY.light} icon={<Camera/>}>Light Badge</Badge>
  </div>
`;

export const rtl = `
<div dir="rtl" style={{'display': 'flex', gap: '16px'}}>
  <Badge priority={BADGE_PRIORITY.default} icon={<Camera/>}>תגית</Badge>
</div>
`;

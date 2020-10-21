export const importExample = `import { Badge, BADGE_PRIORITY } from 'wix-ui-tpa/Badge';`;

export const inlineOverrides = `
<div>
  <Badge>Regular Badge</Badge>
  <Badge styleOverrides={{BadgeBgColor: 'green', BadgeTextColor: 'white'}}>Badge with static overrides</Badge>
  <Badge styleOverrides={{BadgeBgColor: '"color(color-8)"'}}>Badge with dynamic css function (doesn't work yet)</Badge>
</div>
`;

export const stylesheetOverrides = ({ rawCSS }: { rawCSS: string }) => `
<div>
{/*
import {classes as styledBadgeClasses} from './styledBadgeClasses.st.css';
==========================================================================
${rawCSS}
*/}
  <Badge>Regular Badge</Badge>
  <Badge className={styledBadgeClasses.customVariant}>
    Badge with static overrides
  </Badge>
  <Badge className={styledBadgeClasses.customVariantWithCssFunction}>
    Badge with dynamic css functions
  </Badge>
</div>
`;

export const example = `
<div>
    <div style={{'display': 'flex', 'justify-content': 'space-between'}}>
    <Badge priority={BADGE_PRIORITY.default}>Default badge</Badge>
    <Badge priority={BADGE_PRIORITY.default} icon={<Camera />}>Default Icon badge</Badge>
    <Badge priority={BADGE_PRIORITY.light}>Light badge</Badge>
    <Badge priority={BADGE_PRIORITY.light} icon={<Camera />}>Light Icon badge</Badge>
    <Badge priority={BADGE_PRIORITY.primary}>Primary badge</Badge>
    <Badge priority={BADGE_PRIORITY.primary} icon={<Camera />}>Primary Icon badge</Badge>
      </div>
      <div dir="rtl" style={{'margin-top': '15px', 'display': 'flex', 'justify-content': 'space-between'}}>
        <Badge priority={BADGE_PRIORITY.default}>תג ברירת מחדל</Badge>
    <Badge priority={BADGE_PRIORITY.default} icon={<Camera />}>תג ברירת מחדל עם אייקון</Badge>
    <Badge priority={BADGE_PRIORITY.light}>תג קליל</Badge>
    <Badge priority={BADGE_PRIORITY.light} icon={<Camera />}>תג קליל עם אייקון</Badge>
    <Badge priority={BADGE_PRIORITY.primary}>תג ראשי</Badge>
    <Badge priority={BADGE_PRIORITY.primary} icon={<Camera />}>תג ראשי עם אייקון</Badge>
      </div>
</div>
`;

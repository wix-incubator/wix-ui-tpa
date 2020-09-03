export const importExample = `import { Badge, BADGE_PRIORITY } from 'wix-ui-tpa/Badge';`;

export const example = `
<div>
    <div style={{'display': 'flex', 'justify-content': 'space-between'}}>
    <Badge priority={BADGE_PRIORITY.default}>Default badge</Badge>
    <Badge priority={BADGE_PRIORITY.default} icon={(
        <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Camera</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-6.000000, -8.000000)" fill="#000000">
            <g transform="translate(6.000000, 8.000000)">
                <path d="M9,8 L0,8 L0,0 L9,0 L9,2.5 L12,1 L12,7 L9,5.5 L9,8 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
      )}>Default Icon badge</Badge>
    <Badge priority={BADGE_PRIORITY.light}>Light badge</Badge>
    <Badge priority={BADGE_PRIORITY.light} icon={(
        <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Camera</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-6.000000, -8.000000)" fill="#000000">
            <g transform="translate(6.000000, 8.000000)">
                <path d="M9,8 L0,8 L0,0 L9,0 L9,2.5 L12,1 L12,7 L9,5.5 L9,8 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
      )}>Light Icon badge</Badge>
    <Badge priority={BADGE_PRIORITY.primary}>Primary badge</Badge>
    <Badge priority={BADGE_PRIORITY.primary} icon={(
        <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Camera</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-6.000000, -8.000000)" fill="#000000">
            <g transform="translate(6.000000, 8.000000)">
                <path d="M9,8 L0,8 L0,0 L9,0 L9,2.5 L12,1 L12,7 L9,5.5 L9,8 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
      )}>Primary Icon badge</Badge>
      </div>
      <div dir="rtl" style={{'margin-top': '15px', 'display': 'flex', 'justify-content': 'space-between'}}>
        <Badge priority={BADGE_PRIORITY.default}>תג ברירת מחדל</Badge>
    <Badge priority={BADGE_PRIORITY.default} icon={(
        <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Camera</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-6.000000, -8.000000)" fill="#000000">
            <g transform="translate(6.000000, 8.000000)">
                <path d="M9,8 L0,8 L0,0 L9,0 L9,2.5 L12,1 L12,7 L9,5.5 L9,8 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
      )}>תג ברירת מחדל עם אייקון</Badge>
    <Badge priority={BADGE_PRIORITY.light}>תג קליל</Badge>
    <Badge priority={BADGE_PRIORITY.light} icon={(
        <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Camera</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-6.000000, -8.000000)" fill="#000000">
            <g transform="translate(6.000000, 8.000000)">
                <path d="M9,8 L0,8 L0,0 L9,0 L9,2.5 L12,1 L12,7 L9,5.5 L9,8 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
      )}>תג קליל עם אייקון</Badge>
    <Badge priority={BADGE_PRIORITY.primary}>תג ראשי</Badge>
    <Badge priority={BADGE_PRIORITY.primary} icon={(
        <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Camera</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-6.000000, -8.000000)" fill="#000000">
            <g transform="translate(6.000000, 8.000000)">
                <path d="M9,8 L0,8 L0,0 L9,0 L9,2.5 L12,1 L12,7 L9,5.5 L9,8 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
      )}>תג ראשי עם אייקון</Badge>
      </div>
</div>
`;

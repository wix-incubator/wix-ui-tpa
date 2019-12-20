export const importExample = `import { ShareButton } from 'wix-ui-tpa/ShareButton';`;

export const example = `
<ShareButton
    title="Share title"
    url="https://wix.com"
    prefixIcon={<Share />}
    onClick={ sharePromise=>{
        if (!sharePromise) {
            alert('share clicked')
        }
    }}
>Share</ShareButton>
`;

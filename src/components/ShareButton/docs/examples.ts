export const importExample = `import { ShareButton } from 'wix-ui-tpa/ShareButton';`;

export const exampleIconAndText = `
<ShareButton
    shareData={{
      title: "Share title",
      url: "https://wix.com"
    }}
    onClick={ sharePromise=>{
        if (!sharePromise) {
            alert('share clicked')
        }
    }}
    withIcon
    text='Share'
/>
`;

export const exampleIcon = `
<ShareButton
    shareData={{
      title: "Share title",
      url: "https://wix.com"
    }}
    onClick={ sharePromise=>{
        if (!sharePromise) {
            alert('share clicked')
        }
    }}
    withIcon
/>
`;

export const exampleText = `
<ShareButton
    shareData={{
      title: "Share title",
      url: "https://wix.com"
    }}
    onClick={ sharePromise=>{
        if (!sharePromise) {
            alert('share clicked')
        }
    }}
    text='Share'
/>
`;

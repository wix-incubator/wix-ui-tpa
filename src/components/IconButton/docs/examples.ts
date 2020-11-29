const ShareIcon = `
<svg width="24px" height="24px">
    <path d="M14.2736842,7.11666667 C12.1894737,7.21111111 3.66315789,8.62777778 3,21 C4.51578947,17.2222222 8.11578947,14.6722222 12.1894737,14.6722222 C12.8526316,14.6722222 13.5157895,14.7666667 14.2736842,14.8611111 L14.2736842,18.1666667 L21,11.0833333 L14.2736842,4 L14.2736842,7.11666667 Z"/>
</svg>`;

export const basicExample = `
  <div style={{'display': 'flex', gap: '16px'}}>
    <IconButton skin={Skins.Line} icon={${ShareIcon}}/>
    <IconButton skin={Skins.Full} icon={${ShareIcon}}/>
  </div>`;

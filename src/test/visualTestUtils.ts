// @ts-ignore
import SettingsChangedEvent from '../../mocks/fakeTPAChange.json';

const DARK_PALETTE = [
  ['#000000', '#333333', '#666666', '#999999', '#FFFFFF'],
  ['#2D2D2D', '#575757', '#818181', '#ABABAB', '#E8E8E8'],
  ['#542000', '#A84000', '#FC6000', '#FDAF7E', '#FEC9A9'],
  ['#1F3141', '#3E6282', '#5E93C4', '#9FBCD7', '#C2D7EB'],
  ['#4E3206', '#9D640C', '#EC9712', '#F2C682', '#F8DAAC'],
];

export const setDarkPalette = () => {
  const obj = { ...SettingsChangedEvent };
  obj.params.siteColors.forEach((colorObj, ind) => {
    const col = ind % 5;
    const row = Math.floor(ind / 5);

    if (row < 5 && col < 5) {
      colorObj.value = DARK_PALETTE[row][col];
    }
  });
  window.postMessage(JSON.stringify(obj), '*');
};

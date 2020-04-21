const isDevelopment = process.env.NODE_ENV !== 'production';
const cache = {};
const wrapCache = {};

const addToCache = (key: string): void => {
  cache[key] = true;
};

export const wrap = (key: string): void => {
  const keyValue: number = wrapCache[key];
  wrapCache[key] = wrapCache[key] ? keyValue + 1 : 1;
};

export const unwrap = (key: string): void => {
  if (wrapCache[key]) {
    wrapCache[key]--;
  }
};

export function deprecationLog(componentName, ...args) {
  if (isDevelopment && !(cache[componentName] || wrapCache[componentName])) {
    console.warn('wix-ui-tpa: [WARNING]', ...args);
    addToCache(componentName);
  }
}

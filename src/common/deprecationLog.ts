const isDevelopment = process.env.NODE_ENV !== 'production';

export function deprecationLog(...args) {
  if (isDevelopment) {
    console.warn('wix-ui-tpa: [WARNING]', ...args);
  }
}

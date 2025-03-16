module.exports = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/pritibhunia.github.io/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/pritibhunia.github.io' : '',
    images: {
      unoptimized: true,
    },
  };
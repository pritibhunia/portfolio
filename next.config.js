module.exports = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  };
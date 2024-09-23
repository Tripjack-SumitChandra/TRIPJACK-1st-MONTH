module.exports = {
    plugins: [
      require('autoprefixer'), // Automatically adds vendor prefixes
      require('cssnano')({ preset: 'default' }) // Minifies the CSS
    ]
};
  
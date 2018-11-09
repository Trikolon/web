const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn', 'info'] }]);
}

module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins,
};

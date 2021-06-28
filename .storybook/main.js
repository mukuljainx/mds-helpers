const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    /**
     * Adds following addons 
     * Docs
     * Controls
     * Actions
     * Viewport
     * Backgrounds
     * Toolbars & globals
     * https://storybook.js.org/docs/react/essentials/introduction
     */
    "@storybook/addon-essentials",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter(prop) {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    // Return the altered config
    return config;
  },
}
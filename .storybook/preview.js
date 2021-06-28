import '@innovaccer/design-system/css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: { expanded: true },
  options: {}
}

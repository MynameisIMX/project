import type {Preview} from "@storybook/react";
import {makeDecorator} from '@storybook/addons';
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {TranslationDecorator} from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

makeDecorator(StyleDecorator);
makeDecorator(TranslationDecorator);
makeDecorator(RouterDecorator);
makeDecorator(ThemeDecorator(Theme.LIGHT));

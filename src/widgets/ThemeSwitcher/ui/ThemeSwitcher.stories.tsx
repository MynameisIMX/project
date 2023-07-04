import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeSwitcher} from "./ThemeSwitcher";

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args}/>

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Secondary = Template.bind({});
Secondary.args = {};
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)];

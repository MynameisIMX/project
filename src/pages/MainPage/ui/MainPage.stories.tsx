import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...(args as object)}/>

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Secondary = Template.bind({});
Secondary.args = {};
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)];

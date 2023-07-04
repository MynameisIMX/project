import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "./AboutPage";

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AboutPage>;
//@ts-nocheck
const Template: ComponentStory<typeof AboutPage> = (args: object) => <AboutPage {...(args as object)}/>

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Secondary = Template.bind({});
Secondary.args = {};
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)];

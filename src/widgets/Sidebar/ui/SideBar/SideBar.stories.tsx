import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {SideBar} from "./SideBar";

export default {
  title: 'shared/SideBar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args}/>

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {}
Light.decorators = [ThemeDecorator(Theme.DARK)];

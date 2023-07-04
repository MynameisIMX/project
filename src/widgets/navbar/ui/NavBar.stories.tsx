import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/navbar";

export default {
  title: 'shared/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {}
Light.decorators = [ThemeDecorator(Theme.DARK)];

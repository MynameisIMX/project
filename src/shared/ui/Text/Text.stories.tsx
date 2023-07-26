import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {Text} from './Text';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  text: 'text'
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTitle = Template.bind({});
Primary.args = {
  title: 'title',
}
onlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];


export const onlyText = Template.bind({});
Primary.args = {
  text: 'text'
}
onlyText.decorators = [ThemeDecorator(Theme.LIGHT)];

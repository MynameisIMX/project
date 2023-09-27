import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {Button, ButtonSize, ButtonTheme} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
ClearInverted.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE_INVERTED,
}
OutlineInverted.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
OutlineSizeL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
}
BackgroundTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}
BackgroundInvertedTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
}
Square.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.L
}
SquareSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.M
}
SquareSizeM.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.XL
}
SquareSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
Disabled.decorators = [ThemeDecorator(Theme.DARK)];

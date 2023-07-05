import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Modal} from "shared/ui/Modal/Modal";

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>

export const Light = Template.bind({});
Light.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque consectetur consequatur doloremque dolores, error expedita iusto laborum nulla obcaecati odio, quia reprehenderit? Dicta, dolorum fugiat harum illum iure sed sequi tempora. Adipisci deleniti dicta natus non omnis saepe suscipit. A error obcaecati provident qui rerum. Ipsum, quam quidem.',
  isOpen: true,
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque consectetur consequatur doloremque dolores, error expedita iusto laborum nulla obcaecati odio, quia reprehenderit? Dicta, dolorum fugiat harum illum iure sed sequi tempora. Adipisci deleniti dicta natus non omnis saepe suscipit. A error obcaecati provident qui rerum. Ipsum, quam quidem.',
  isOpen: true,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)];

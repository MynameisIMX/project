import 'app/styles/index.scss';
import { StoryObj } from '@storybook/react';
import {BrowserRouter} from "react-router-dom";

export const RouterDecorator = (story: () => StoryObj) => {
  return (
    <BrowserRouter>
      { story() }
    </BrowserRouter>
  )
};

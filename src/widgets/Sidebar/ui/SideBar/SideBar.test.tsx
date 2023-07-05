import React from "react";
import {screen} from "@testing-library/react";
import {SideBar} from "./SideBar";
import {fireEvent} from "@storybook/testing-library";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<SideBar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    componentRender(<SideBar/>);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

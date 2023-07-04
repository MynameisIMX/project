import React from "react";
import {screen} from "@testing-library/react";
import {SideBar} from "./SideBar";
import {renderWithTranslation} from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {fireEvent} from "@storybook/testing-library";

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<SideBar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslation(<SideBar/>);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

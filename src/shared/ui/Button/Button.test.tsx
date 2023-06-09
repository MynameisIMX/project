import React from "react";
import { Button } from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});

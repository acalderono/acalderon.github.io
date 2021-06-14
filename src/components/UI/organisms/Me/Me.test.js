import React from "react";
import { render, screen } from "@testing-library/react";
import { Me } from "./Me";

describe("Component Me", () => {
  it("renders without crashing", () => {
    render(<Me />);
  });

  it("must display the name Hola", () => {
    render(<Me />);
    expect(screen.queryByText(/hola/i)).toBeInTheDocument();
  });
  it("must display the name Soy Angel", () => {
    render(<Me />);
    expect(screen.queryByText(/soy ángel/i)).toBeInTheDocument();
  });
});

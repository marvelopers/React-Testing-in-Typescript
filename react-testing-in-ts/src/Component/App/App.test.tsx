/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("renders learn react link", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.svg");

    expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      "Edit src/App.tsx and save to reload."
    );

    // expect(container).toMatchSnapshot();
  });
});

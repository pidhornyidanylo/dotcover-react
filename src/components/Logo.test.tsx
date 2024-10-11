import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Logo from "./Logo";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("Logo", () => {
  it('has black color if color="black"', () => {
    render(
      <BrowserRouter>
        <Logo color={"black"} currentAuthor={""} />
      </BrowserRouter>,
    );
    const logoElement = screen.getByRole("heading", {
      name: /\.cover/i,
    });
    expect(logoElement).toHaveClass("text-black");
  });
  it('has white color if color="white"', () => {
    render(
      <BrowserRouter>
        <Logo color={"white"} currentAuthor={""} />
      </BrowserRouter>,
    );
    const logoElement = screen.getByRole("heading", {
      name: /\.cover/i,
    });
    expect(logoElement).toHaveClass("text-white");
  });
});

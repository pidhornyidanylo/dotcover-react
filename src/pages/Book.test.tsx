import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Book from "./Book";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Book page", () => {
  it("renders heading component", () => {
    render(
      <BrowserRouter>
        <Book currentAuthor={0} />
      </BrowserRouter>,
    );
    const heading = screen.getByRole("heading", {
      name: /the metamorphosis/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders social Pinterest icons", () => {
    render(
      <BrowserRouter>
        <Book currentAuthor={0} />
      </BrowserRouter>,
    );
    const pinterestIcon = screen.getByRole("img", {
      name: /pinterest/i,
    });
    expect(pinterestIcon).toBeInTheDocument();
  });
});
